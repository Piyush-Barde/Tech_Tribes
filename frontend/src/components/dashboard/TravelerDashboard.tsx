import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Search } from "lucide-react";

const TravelerDashboard = () => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 lg:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Plan Your Trip</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2 items-center">
                                <MapPin className="text-muted-foreground w-5 h-5" />
                                <Input
                                    placeholder="From (Source)"
                                    value={source}
                                    onChange={(e) => setSource(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPin className="text-primary w-5 h-5" />
                                <Input
                                    placeholder="To (Destination)"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <Button className="w-full">
                                <Search className="mr-2 h-4 w-4" />
                                Find Options
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Filters & Preferences</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="stay" className="w-full">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="stay">Stay</TabsTrigger>
                                    <TabsTrigger value="food">Food</TabsTrigger>
                                    <TabsTrigger value="transit">Transit</TabsTrigger>
                                </TabsList>
                                <TabsContent value="stay" className="mt-4 space-y-2">
                                    <Button variant="outline" className="w-full justify-start">🏨 Hotels</Button>
                                    <Button variant="outline" className="w-full justify-start">🏡 Homestays</Button>
                                </TabsContent>
                                <TabsContent value="food" className="mt-4 space-y-2">
                                    <Button variant="outline" className="w-full justify-start">🍽️ Restaurants</Button>
                                    <Button variant="outline" className="w-full justify-start">☕ Cafes</Button>
                                    <Button variant="outline" className="w-full justify-start">🍜 Street Food</Button>
                                </TabsContent>
                                <TabsContent value="transit" className="mt-4 space-y-2">
                                    <Button variant="outline" className="w-full justify-start">🚕 Cab Services</Button>
                                    <Button variant="outline" className="w-full justify-start">🚌 Local Bus</Button>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-4">
                    <Card className="h-full min-h-[400px]">
                        <CardHeader>
                            <CardTitle>Map View</CardTitle>
                        </CardHeader>
                        <CardContent className="h-full flex items-center justify-center bg-muted/20 rounded-md">
                            <div className="text-muted-foreground flex flex-col items-center">
                                <MapPin className="h-12 w-12 mb-2 opacity-50" />
                                <p>Map Placeholder</p>
                                <p className="text-xs">Interactive map will appear here</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TravelerDashboard;
