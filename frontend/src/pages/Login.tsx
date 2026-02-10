import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Compass, ArrowLeft, Mail, Lock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // placeholder – will integrate with backend later
    navigate("/traveler");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-ocean/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 w-full max-w-md px-4">
        <AnimatedSection className="text-center mb-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-ocean transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center shadow-lg animate-pulse-glow">
              <Compass className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">Sign in to continue your journey</p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={200}>
          <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-ocean" /> Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-ocean" /> Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button className="text-sm text-ocean hover:underline">Forgot password?</button>
              </div>

              <Button
                variant="hero"
                size="xl"
                className="w-full group"
                disabled={!email || !password}
                onClick={handleLogin}
              >
                Login
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button onClick={() => navigate("/register")} className="text-ocean hover:underline font-medium">
                  Register now
                </button>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Login;
