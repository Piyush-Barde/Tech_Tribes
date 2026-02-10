import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Compass,
  Users,
  Hotel,
  Map,
  ArrowLeft,
  ArrowRight,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Home,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type UserRole = "traveler" | "owner" | "agent";
type TravelerType = "solo" | "new" | "experienced" | "group";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole | "">("");
  const [travelerType, setTravelerType] = useState<TravelerType | "">("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    location: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const roles = [
    {
      value: "traveler" as UserRole,
      icon: Globe,
      title: "Traveler",
      description: "Explore destinations, plan trips, and connect with locals.",
      color: "ocean",
    },
    {
      value: "owner" as UserRole,
      icon: Hotel,
      title: "Local Owner",
      description: "List your hotel, restaurant, or transport service.",
      color: "coral",
    },
    {
      value: "agent" as UserRole,
      icon: Map,
      title: "Travel Agent",
      description: "Create itineraries and guide travelers worldwide.",
      color: "forest",
    },
  ];

  const travelerTypes = [
    { value: "solo" as TravelerType, label: "Solo Traveler", desc: "I travel alone and love independence." },
    { value: "new" as TravelerType, label: "New Traveler", desc: "I'm just starting my travel journey." },
    { value: "experienced" as TravelerType, label: "Experienced Traveler", desc: "I've been to many places already." },
    { value: "group" as TravelerType, label: "Group Traveler", desc: "I travel with family or friends." },
  ];

  const canProceedStep1 = role !== "";
  const canProceedStep2 = role !== "traveler" || travelerType !== "";
  const canProceedStep3 =
    formData.name && formData.email && formData.phone && formData.country && formData.password && formData.confirmPassword;

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    // Navigate to login after registration
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-ocean transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center shadow-lg">
              <Compass className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Join <span className="text-gradient-ocean">Guide-Us</span>
          </h1>
          <p className="text-muted-foreground">Create your account and start your journey</p>
        </AnimatedSection>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-500 ${
                  step >= s
                    ? "bg-gradient-to-br from-ocean to-ocean-light text-white shadow-lg shadow-ocean/30"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-1 rounded-full transition-all duration-500 ${
                    step > s ? "bg-ocean" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Choose Role */}
        {step === 1 && (
          <AnimatedSection animation="fade-in">
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground text-center">
                I am a...
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setRole(r.value)}
                    className={`group p-6 rounded-2xl border-2 text-left transition-all duration-500 hover:-translate-y-1 ${
                      role === r.value
                        ? r.color === "ocean"
                          ? "border-ocean bg-ocean/10 shadow-lg shadow-ocean/10"
                          : r.color === "coral"
                          ? "border-coral bg-coral/10 shadow-lg shadow-coral/10"
                          : "border-forest bg-forest/10 shadow-lg shadow-forest/10"
                        : "border-border bg-card hover:border-ocean/30 hover:shadow-md"
                    }`}
                  >
                    <r.icon
                      className={`w-8 h-8 mb-3 transition-all duration-300 group-hover:scale-110 ${
                        role === r.value
                          ? r.color === "ocean"
                            ? "text-ocean"
                            : r.color === "coral"
                            ? "text-coral"
                            : "text-forest"
                          : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.description}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  disabled={!canProceedStep1}
                  onClick={() => setStep(role === "traveler" ? 2 : 3)}
                  className="group"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Step 2: Traveler Type (only for travelers) */}
        {step === 2 && (
          <AnimatedSection animation="fade-in">
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-semibold text-foreground text-center">
                What kind of traveler are you?
              </h2>
              <RadioGroup
                value={travelerType}
                onValueChange={(val) => setTravelerType(val as TravelerType)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {travelerTypes.map((t) => (
                  <label
                    key={t.value}
                    htmlFor={t.value}
                    className={`flex items-start gap-3 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                      travelerType === t.value
                        ? "border-ocean bg-ocean/10 shadow-md shadow-ocean/10"
                        : "border-border bg-card hover:border-ocean/30"
                    }`}
                  >
                    <RadioGroupItem value={t.value} id={t.value} className="mt-1" />
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.label}</p>
                      <p className="text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </label>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-4">
                <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </Button>
                <Button
                  variant="hero"
                  size="lg"
                  disabled={!canProceedStep2}
                  onClick={() => setStep(3)}
                  className="group"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <AnimatedSection animation="fade-in">
            <div className="space-y-5">
              <h2 className="text-xl font-heading font-semibold text-foreground text-center">
                Your Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-ocean" /> Full Name
                  </Label>
                  <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-ocean" /> Email
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-ocean" /> Phone
                  </Label>
                  <Input id="phone" name="phone" placeholder="+1 234 567 890" value={formData.phone} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-ocean" /> Country
                  </Label>
                  <Input id="country" name="country" placeholder="United States" value={formData.country} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-ocean" /> City / Location
                  </Label>
                  <Input id="location" name="location" placeholder="New York" value={formData.location} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-ocean" /> Address
                  </Label>
                  <Input id="address" name="address" placeholder="123 Main St" value={formData.address} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleInputChange} />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" size="lg" onClick={() => setStep(role === "traveler" ? 2 : 1)}>
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </Button>
                <Button
                  variant="hero"
                  size="lg"
                  disabled={!canProceedStep3}
                  onClick={handleSubmit}
                  className="group"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground pt-2">
                Already have an account?{" "}
                <button onClick={() => navigate("/login")} className="text-ocean hover:underline font-medium">
                  Login here
                </button>
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default Register;
