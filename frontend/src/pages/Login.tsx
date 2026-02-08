import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Compass, Key, Mail, ArrowRight, Loader2 } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        // Simulate network delay for better UX
        setTimeout(() => {
            const mockUser = {
                name: "Demo Traveler",
                email: email,
                location: "New York",
                address: "123 Main St",
                number: "555-0123",
                country: "USA",
                userType: "traveler" as const,
                travelerType: "experienced" as const
            };

            login(mockUser);
            toast.success("Welcome back!", {
                description: "Ready for your next adventure?",
            });
            setIsLoading(false);
            navigate("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <Card className="w-full max-w-md border-white/20 shadow-2xl bg-white/70 backdrop-blur-xl animate-in fade-in zoom-in duration-500">
                <CardHeader className="space-y-1 text-center pb-8">
                    <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 duration-300">
                            <Compass className="h-7 w-7 text-white" />
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Welcome Back
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground">
                        Continue your journey with Guide-Us
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2 group">
                            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</Label>
                            <div className="relative transition-all duration-300 transform group-hover:-translate-y-0.5">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors({ ...errors, email: "" });
                                    }}
                                    className={`pl-10 h-11 bg-white/50 border-gray-200 focus:bg-white transition-all duration-300 ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500 focus:border-purple-500"}`}
                                />
                            </div>
                            {errors.email && <p className="text-xs font-medium text-red-500 animate-in slide-in-from-left-1">{errors.email}</p>}
                        </div>
                        <div className="space-y-2 group">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</Label>
                                <Link to="#" className="text-xs text-primary hover:underline font-medium">Forgot password?</Link>
                            </div>
                            <div className="relative transition-all duration-300 transform group-hover:-translate-y-0.5">
                                <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errors.password) setErrors({ ...errors, password: "" });
                                    }}
                                    className={`pl-10 h-11 bg-white/50 border-gray-200 focus:bg-white transition-all duration-300 ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500 focus:border-purple-500"}`}
                                />
                            </div>
                            {errors.password && <p className="text-xs font-medium text-red-500 animate-in slide-in-from-left-1">{errors.password}</p>}
                        </div>
                        <Button
                            type="submit"
                            className="w-full h-12 text-md font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="justify-center pb-8">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Don't have an account?{" "}
                        <Link to="/register" className="font-semibold text-primary hover:text-purple-600 transition-colors hover:underline">
                            Create free account
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
