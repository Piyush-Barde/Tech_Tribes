import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Globe, User } from "lucide-react";

const Profile = () => {
    const { user } = useAuth();

    if (!user) {
        return <div className="p-8 text-center">Please log in to view your profile.</div>;
    }

    return (
        <div className="container py-10 max-w-4xl mx-auto animate-in fade-in duration-500">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary to-purple-600"></div>

                <CardHeader className="relative pb-0 pt-0">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-end -mt-12 px-6">
                        <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="text-2xl bg-primary text-white">
                                {user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                            <h1 className="text-3xl font-bold">{user.name}</h1>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mt-1">
                                <MapPin className="h-4 w-4" />
                                <span>{user.location}, {user.country}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <Badge variant="secondary" className="px-4 py-1 text-sm bg-purple-100 text-purple-700 hover:bg-purple-200 uppercase tracking-wide">
                                {user.userType}
                            </Badge>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-8 mt-4 grid gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                Personal Information
                            </h3>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium text-muted-foreground">User Type</p>
                                <p className="text-base capitalize">
                                    {user.userType === 'traveler' && user.travelerType
                                        ? `${user.travelerType} Traveler`
                                        : user.userType}
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium text-muted-foreground">Full Address</p>
                                <p className="text-base">{user.address || "Not provided"}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <Globe className="h-5 w-5 text-primary" />
                                Contact Details
                            </h3>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                                <Mail className="h-5 w-5 text-gray-500" />
                                <div>
                                    <p className="text-xs text-muted-foreground">Email</p>
                                    <p className="text-sm font-medium">{user.email || "Not provided"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                                <Phone className="h-5 w-5 text-gray-500" />
                                <div>
                                    <p className="text-xs text-muted-foreground">Phone</p>
                                    <p className="text-sm font-medium">{user.number || "Not provided"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;
