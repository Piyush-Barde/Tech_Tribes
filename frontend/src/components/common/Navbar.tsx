import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Home, MessageSquare, Settings, User as UserIcon } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo placeholder - replace with actual logo if available */}
                    <div className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        guide-us
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        <span className="hidden md:inline">Dashboard</span>
                    </Link>
                    <Link to="/home" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        {/* Using /home as per request, though usually dashboard is home. Mapping /home to Dashboard as well for now */}
                        Home
                    </Link>
                    <Link to="/community" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span className="hidden md:inline">Community</span>
                    </Link>
                    <Link to="/notifications" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        <span className="hidden md:inline">Notifications</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/settings">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                        </Button>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-10 w-auto rounded-full px-2 flex items-center gap-2 hover:bg-gray-100">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <span className="hidden md:inline font-medium text-sm">{user.name}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">{user.name}</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        {user.location}
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link to="/profile" className="cursor-pointer">
                                    <UserIcon className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
