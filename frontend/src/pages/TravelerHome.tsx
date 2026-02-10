import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Compass,
  Search,
  MapPin,
  Hotel,
  Utensils,
  Car,
  Sparkles,
  MessageCircle,
  Bell,
  Settings,
  User,
  Star,
  ArrowRight,
  TrendingUp,
  Calendar,
  Heart,
  ChevronRight,
  Sun,
  Cloud,
  Plane,
  Map,
  Users,
  Bot,
  Home,
} from "lucide-react";

const TravelerHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const quickActions = [
    { icon: Hotel, label: "Stays", color: "from-ocean to-ocean-light", path: "#" },
    { icon: Utensils, label: "Food", color: "from-coral to-coral-light", path: "#" },
    { icon: Car, label: "Transport", color: "from-sunset to-coral-light", path: "#" },
    { icon: Sparkles, label: "AI Essentials", color: "from-forest to-ocean", path: "#" },
    { icon: Users, label: "Agents", color: "from-ocean-dark to-ocean", path: "#" },
    { icon: MessageCircle, label: "Community", color: "from-coral to-sunset", path: "#" },
  ];

  const trendingDestinations = [
    { name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop", rating: 4.8, tag: "Tropical" },
    { name: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop", rating: 4.9, tag: "Cultural" },
    { name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop", rating: 4.7, tag: "Romantic" },
    { name: "Swiss Alps", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop", rating: 4.9, tag: "Adventure" },
  ];

  const upcomingTrips = [
    { destination: "Goa, India", date: "Mar 15 - 20, 2026", status: "Confirmed", daysLeft: 33 },
    { destination: "Maldives", date: "Apr 10 - 16, 2026", status: "Planning", daysLeft: 59 },
  ];

  const aiSuggestions = [
    "Pack light rain gear for your Goa trip 🌧️",
    "Best time to visit Kyoto: March-April 🌸",
    "Don't forget sunscreen SPF 50+ for Maldives ☀️",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Guide-Us</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Map, label: "Explore", active: false },
              { icon: MessageCircle, label: "Community", active: false },
              { icon: Bell, label: "Alerts", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  item.active
                    ? "bg-ocean/10 text-ocean"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center text-white font-heading font-bold text-sm hover:shadow-lg hover:shadow-ocean/30 transition-all duration-300 hover:scale-105">
            J
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* Greeting + Search */}
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ocean-dark via-ocean to-ocean-light p-8 md:p-12">
            <div className="absolute top-4 right-8 opacity-10">
              <Plane className="w-32 h-32 text-white rotate-45" />
            </div>
            <div className="absolute bottom-4 left-8 opacity-10">
              <Map className="w-24 h-24 text-white" />
            </div>

            <div className="relative z-10">
              <p className="text-white/70 text-sm font-medium mb-1">Good morning,</p>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                Where to next, John? ✈️
              </h1>
              <p className="text-white/60 mb-6 max-w-lg">
                Discover your next adventure. Search destinations, find local gems, and plan your perfect trip.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search destinations, stays, food..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 rounded-xl bg-white/95 border-0 text-foreground placeholder:text-muted-foreground shadow-lg"
                  />
                </div>
                <Button variant="default" size="lg" className="h-12 rounded-xl bg-coral hover:bg-coral/90 text-white font-semibold px-6 shadow-lg">
                  <Search className="w-4 h-4 mr-2" />
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Actions */}
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickActions.map((action, i) => (
              <button
                key={action.label}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-ocean/40 hover:shadow-lg hover:shadow-ocean/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-ocean transition-colors duration-300">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trending Destinations */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-ocean" />
                    Trending Destinations
                  </h2>
                  <p className="text-sm text-muted-foreground">Popular places travelers love right now</p>
                </div>
                <button className="text-sm text-ocean hover:underline flex items-center gap-1 font-medium">
                  View all <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trendingDestinations.map((dest, i) => (
                  <div
                    key={dest.name}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                        {dest.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-white text-lg">{dest.name}</h3>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 text-sunset fill-sunset" />
                            <span className="text-white/80 text-sm">{dest.rating}</span>
                          </div>
                        </div>
                        <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors duration-300 group-hover:scale-110">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Plan a Trip CTA */}
            <AnimatedSection animation="scale-in" delay={300}>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-coral/10 via-sunset/10 to-coral-light/10 border border-coral/20 p-6 md:p-8">
                <div className="absolute top-4 right-4 opacity-20">
                  <Calendar className="w-20 h-20 text-coral" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    Ready to plan your next adventure?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 max-w-md">
                    Set your source and destination, and let our AI generate a personalized essentials list, itinerary suggestions, and more.
                  </p>
                  <Button variant="default" className="bg-coral hover:bg-coral/90 text-white group">
                    Start Planning
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Trips */}
            <AnimatedSection animation="fade-in" delay={250}>
              <div className="rounded-2xl bg-card border border-border p-5">
                <h3 className="font-heading font-bold text-foreground flex items-center gap-2 mb-4">
                  <Plane className="w-4 h-4 text-ocean" />
                  Upcoming Trips
                </h3>
                <div className="space-y-3">
                  {upcomingTrips.map((trip) => (
                    <div
                      key={trip.destination}
                      className="group p-4 rounded-xl bg-secondary/50 hover:bg-ocean/5 border border-transparent hover:border-ocean/20 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-heading font-semibold text-foreground group-hover:text-ocean transition-colors">
                          {trip.destination}
                        </h4>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            trip.status === "Confirmed"
                              ? "bg-forest/10 text-forest"
                              : "bg-sunset/10 text-sunset"
                          }`}
                        >
                          {trip.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {trip.date}
                      </p>
                      <p className="text-xs text-ocean mt-1 font-medium">{trip.daysLeft} days to go</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-3 text-sm" size="sm">
                  View All Trips
                </Button>
              </div>
            </AnimatedSection>

            {/* AI Assistant Tips */}
            <AnimatedSection animation="fade-in" delay={350}>
              <div className="rounded-2xl bg-gradient-to-br from-ocean/5 to-ocean-light/5 border border-ocean/10 p-5">
                <h3 className="font-heading font-bold text-foreground flex items-center gap-2 mb-4">
                  <Bot className="w-4 h-4 text-ocean" />
                  AI Travel Tips
                </h3>
                <div className="space-y-2">
                  {aiSuggestions.map((tip, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-card/80 border border-border hover:border-ocean/30 transition-all duration-300 cursor-pointer group"
                    >
                      <Sparkles className="w-4 h-4 text-ocean mt-0.5 group-hover:rotate-12 transition-transform duration-300" />
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Weather Widget */}
            <AnimatedSection animation="fade-in" delay={400}>
              <div className="rounded-2xl bg-card border border-border p-5">
                <h3 className="font-heading font-bold text-foreground flex items-center gap-2 mb-4">
                  <Sun className="w-4 h-4 text-sunset" />
                  Weather at Destination
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Goa, India</p>
                    <p className="text-3xl font-heading font-bold text-foreground">32°C</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Cloud className="w-3 h-3" /> Partly Cloudy
                    </p>
                  </div>
                  <Sun className="w-16 h-16 text-sunset/30" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* Floating AI Assistant Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-ocean to-ocean-light text-white shadow-xl shadow-ocean/30 flex items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-ocean/40 transition-all duration-300 z-50 group">
        <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-xl border-t border-border z-40">
        <div className="flex items-center justify-around h-16">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Map, label: "Explore", active: false },
            { icon: MessageCircle, label: "Chat", active: false },
            { icon: Bell, label: "Alerts", active: false },
            { icon: User, label: "Profile", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors duration-300 ${
                item.active ? "text-ocean" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TravelerHome;
