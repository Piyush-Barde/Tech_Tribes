import { useState } from "react";
import { useAuth, UserType, TravelerType } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { User, Mail, Lock, Phone, MapPin, Globe, Loader2, Plane, Building2, Briefcase } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        location: "",
        address: "",
        number: "",
        country: "",
        userType: "traveler" as UserType,
        travelerType: "solo" as TravelerType,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be 6+ chars";
        }

        if (!formData.location.trim()) newErrors.location = "City is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setTimeout(() => {
            const { password, ...userContextData } = formData;
            login(userContextData);
            toast.success("Account created successfully!");
            setIsLoading(false);
            navigate("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen py-10 px-4 flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-full blur-[100px] -z-10 animate-pulse animation-delay-2000" />

            <Card className="w-full max-w-3xl relative z-10 border-none shadow-2xl bg-white/80 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-700">
                <CardHeader className="text-center pb-8 bg-gradient-to-b from-white to-gray-50/50 rounded-t-xl border-b">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        Create Your Account
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                        Join our global community of travelers and explorers
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* User Type Selection */}
                        <div className="space-y-4">
                            <Label className="text-base font-semibold text-gray-700 block text-center mb-4">I want to join as a...</Label>
                            <RadioGroup
                                defaultValue="traveler"
                                value={formData.userType}
                                onValueChange={(val) => handleChange("userType", val)}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                            >
                                {[
                                    { id: "traveler", icon: Plane, label: "Traveler", desc: "Explore the world" },
                                    { id: "owner", icon: Building2, label: "Owner", desc: "List your property" },
                                    { id: "agent", icon: Briefcase, label: "Agent", desc: "Plan trips" }
                                ].map((type) => (
                                    <div key={type.id} className="relative">
                                        <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                                        <Label
                                            htmlFor={type.id}
                                            className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-primary/50 hover:shadow-md transition-all duration-300 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:shadow-lg cursor-pointer h-full group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white">
                                                <type.icon className="h-6 w-6" />
                                            </div>
                                            <span className="font-bold text-lg mb-1">{type.label}</span>
                                            <span className="text-xs text-muted-foreground text-center">{type.desc}</span>
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2 group">
                                <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                        className={`pl-10 h-11 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                                    />
                                </div>
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div className="space-y-2 group">
                                <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        className={`pl-10 h-11 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div className="space-y-2 group">
                                <Label htmlFor="password" className="text-sm font-semibold">Password *</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Min 6 characters"
                                        value={formData.password}
                                        onChange={(e) => handleChange("password", e.target.value)}
                                        className={`pl-10 h-11 transition-all ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                                    />
                                </div>
                                {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                            </div>

                            {/* Phone */}
                            <div className="space-y-2 group">
                                <Label htmlFor="number" className="text-sm font-semibold">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="number"
                                        placeholder="+1 234 567 890"
                                        value={formData.number}
                                        onChange={(e) => handleChange("number", e.target.value)}
                                        className="pl-10 h-11 focus:ring-primary transition-all"
                                    />
                                </div>
                            </div>

                            {/* City */}
                            <div className="space-y-2 group">
                                <Label htmlFor="location" className="text-sm font-semibold">City *</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="location"
                                        placeholder="New York"
                                        value={formData.location}
                                        onChange={(e) => handleChange("location", e.target.value)}
                                        className={`pl-10 h-11 transition-all ${errors.location ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                                    />
                                </div>
                                {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                            </div>

                            {/* Country */}
                            <div className="space-y-2 group">
                                <Label htmlFor="country" className="text-sm font-semibold">Country *</Label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="country"
                                        placeholder="USA"
                                        value={formData.country}
                                        onChange={(e) => handleChange("country", e.target.value)}
                                        className={`pl-10 h-11 transition-all ${errors.country ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                                    />
                                </div>
                                {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
                            </div>

                            {/* Address - Full Width */}
                            <div className="space-y-2 md:col-span-2 group">
                                <Label htmlFor="address" className="text-sm font-semibold">Full Address</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <Input
                                        id="address"
                                        placeholder="123 Main St, Apt 4B"
                                        value={formData.address}
                                        onChange={(e) => handleChange("address", e.target.value)}
                                        className="pl-10 h-11 focus:ring-primary transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Traveler Specific Options */}
                        {formData.userType === "traveler" && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                                <Label htmlFor="traveler-type" className="text-sm font-semibold text-blue-900">What kind of traveler are you?</Label>
                                <Select
                                    value={formData.travelerType}
                                    onValueChange={(val) => handleChange("travelerType", val)}
                                >
                                    <SelectTrigger className="bg-white border-blue-200 focus:ring-blue-500">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="solo">Solo Traveler</SelectItem>
                                        <SelectItem value="new">New User</SelectItem>
                                        <SelectItem value="experienced">Experienced User</SelectItem>
                                        <SelectItem value="group">Traveling in Group</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </Button>

                        <div className="text-center mt-4">
                            <p className="text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link to="/login" className="font-semibold text-primary hover:text-purple-600 transition-colors hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
