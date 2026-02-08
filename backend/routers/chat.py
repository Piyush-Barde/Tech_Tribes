import sys
import subprocess

# 👇 1. MAGIC AUTO-INSTALLER (Fixes the "Missing Module" error)
try:
    from geopy.geocoders import Nominatim
except ImportError:
    print("📦 Missing library detected. Installing 'geopy' automatically...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "geopy"])
    from geopy.geocoders import Nominatim

from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Query
from typing import List, Dict
import math

router = APIRouter(tags=["Chat"])

# 2. SETUP THE LOOKUP TOOL
geolocator = Nominatim(user_agent="guide_us_hackathon_app")
CITY_CACHE = {} 

def get_city_coordinates(city_name: str):
    key = city_name.lower().strip()
    if key in CITY_CACHE:
        return CITY_CACHE[key]
    
    try:
        location = geolocator.geocode(city_name)
        if location:
            coords = {"lat": location.latitude, "lon": location.longitude}
            CITY_CACHE[key] = coords
            print(f"📍 Found {city_name}: {coords}")
            return coords
    except:
        return None
    return None

def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Earth radius in km
    dLat = math.radians(lat2 - lat1)
    dLon = math.radians(lon2 - lon1)
    a = math.sin(dLat/2) * math.sin(dLat/2) + \
        math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * \
        math.sin(dLon/2) * math.sin(dLon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, room_name: str):
        await websocket.accept()
        if room_name not in self.active_connections:
            self.active_connections[room_name] = []
        self.active_connections[room_name].append(websocket)

    def disconnect(self, websocket: WebSocket, room_name: str):
        if room_name in self.active_connections:
            if websocket in self.active_connections[room_name]:
                self.active_connections[room_name].remove(websocket)

    async def broadcast(self, message: str, room_name: str):
        if room_name in self.active_connections:
            for connection in self.active_connections[room_name]:
                await connection.send_text(message)

manager = ConnectionManager()

# 3. THE WEBSOCKET ENDPOINT
@router.websocket("/ws/{room_name}/{user_name}")
async def websocket_endpoint(
    websocket: WebSocket, 
    room_name: str, 
    user_name: str,
    lat: float = Query(None), 
    lon: float = Query(None)
):
    mode = "SCOUT" # Default

    # A. Check City
    target = get_city_coordinates(room_name)
    
    if target and lat and lon:
        dist = calculate_distance(lat, lon, target["lat"], target["lon"])
        if dist <= 20: # 20km Radius
            mode = "LIVE"
    
    await manager.connect(websocket, room_name)
    
    if mode == "LIVE":
        await websocket.send_text(f"✅ VERIFIED: You are in {room_name}!")
        await manager.broadcast(f"🟢 {user_name} joined (Local)", room_name)
    else:
        await websocket.send_text(f"🔭 SCOUT MODE: You are viewing {room_name} from a distance.")

    try:
        while True:
            data = await websocket.receive_text()
            if mode == "LIVE":
                await manager.broadcast(f"{user_name}: {data}", room_name)
            else:
                await websocket.send_text("❌ Scout Mode: Read-only.")
                
    except WebSocketDisconnect:
        manager.disconnect(websocket, room_name)
        if mode == "LIVE":
            await manager.broadcast(f"🔴 {user_name} left.", room_name)