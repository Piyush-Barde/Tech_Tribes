import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Compass, 
  Users, 
  Hotel, 
  Utensils, 
  Car, 
  MessageCircle,
  Shield,
  Star,
  Globe,
  Heart,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Sparkles,
  Map,
  ChevronUp
} from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: Hotel,
      title: "Best Accommodations",
      description: "Find top-rated hotels, homestays, and unique stays curated from trusted platforms."
    },
    {
      icon: Utensils,
      title: "Local Cuisine",
      description: "Discover authentic street food, cafes, and restaurants recommended by locals."
    },
    {
      icon: Car,
      title: "Easy Transport",
      description: "Book local vehicles and travel services for seamless journey experiences."
    },
    {
      icon: Users,
      title: "Travel Agents",
      description: "Connect with experienced travel agents and join exciting group tours."
    },
    {
      icon: Sparkles,
      title: "AI Essentials",
      description: "Get AI-powered packing lists, medical supplies, and seasonal recommendations."
    },
    {
      icon: MessageCircle,
      title: "Community",
      description: "Chat with fellow travelers and locals to get insider tips and advice."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Sign up as a traveler, local owner, or travel agent to unlock personalized features."
    },
    {
      step: "02",
      title: "Plan Your Journey",
      description: "Select your destination, explore accommodations, food spots, and activities."
    },
    {
      step: "03",
      title: "Get AI Recommendations",
      description: "Receive smart suggestions for essentials, weather-appropriate gear, and must-visit places."
    },
    {
      step: "04",
      title: "Travel & Connect",
      description: "Enjoy your trip while staying connected with our community and real-time support."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background scroll-smooth">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground/80" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Compass className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: "1s" }}>
          <Globe className="w-20 h-20 text-white" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float opacity-20" style={{ animationDelay: "2s" }}>
          <MapPin className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-48 left-20 animate-float opacity-15" style={{ animationDelay: "3s" }}>
          <Map className="w-14 h-14 text-white" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center shadow-lg animate-pulse-glow">
                <Compass className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-ocean-light via-coral-light to-coral bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                Guide-Us
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Your ultimate travel companion. Discover destinations, connect with locals, 
              find the best stays & food, and create unforgettable memories with AI-powered planning.
            </p>
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="xl"
              className="flex-1 group relative overflow-hidden"
              onClick={() => navigate("/register")}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              Are you a new user?
            </Button>
            
            <Button
              variant="heroOutline"
              size="xl"
              className="flex-1 group relative overflow-hidden"
              onClick={() => navigate("/login")}
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              Login
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div 
            className="flex items-center gap-8 mt-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { value: "10K+", label: "Travelers" },
              { value: "500+", label: "Destinations" },
              { value: "1K+", label: "Local Guides" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <p className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider group-hover:text-ocean-light transition-colors duration-300">
                  {stat.label}
                </p>
                {index < 2 && <div className="hidden" />}
              </div>
            )).reduce<React.ReactNode[]>((acc, elem, i, arr) => {
              acc.push(elem);
              if (i < arr.length - 1) {
                acc.push(<div key={`divider-${i}`} className="w-px h-8 bg-white/20" />);
              }
              return acc;
            }, [])}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-[fade-in_1s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-ocean font-semibold uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Everything You Need to Travel
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From planning to exploring, we've got every aspect of your journey covered with smart tools and local expertise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={index}
                animation="scale-in"
                delay={index * 100}
              >
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-ocean/50 hover:shadow-2xl hover:shadow-ocean/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ocean/10 to-ocean/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gradient-to-br group-hover:from-ocean group-hover:to-ocean-light transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-ocean group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-coral font-semibold uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to transform your travel dreams into reality.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <AnimatedSection 
                key={index}
                animation="fade-in"
                delay={index * 150}
              >
                <div className="relative group cursor-pointer">
                  <div className="text-center">
                    <div className="text-6xl font-heading font-bold text-ocean/10 mb-4 group-hover:text-ocean/30 group-hover:scale-110 transition-all duration-500">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-ocean/30 group-hover:text-ocean group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* For Everyone Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-ocean font-semibold uppercase tracking-wider mb-3">For Everyone</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Built for All Types of Users
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-left" delay={0}>
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-ocean/10 to-ocean/5 border border-ocean/20 hover:border-ocean/50 hover:shadow-2xl hover:shadow-ocean/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <Globe className="w-10 h-10 text-ocean mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Travelers</h3>
                <p className="text-muted-foreground mb-4">
                  Solo adventurers, families, or groups – plan your perfect trip with personalized recommendations, 
                  AI-powered packing lists, and real-time local insights.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Smart trip planning", "AI essentials generator", "Interactive maps"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 group/item hover:text-foreground transition-colors duration-200">
                      <Star className="w-4 h-4 text-ocean group-hover/item:scale-110 transition-transform duration-200" /> 
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={150}>
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-coral/5 border border-coral/20 hover:border-coral/50 hover:shadow-2xl hover:shadow-coral/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <Hotel className="w-10 h-10 text-coral mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Local Owners</h3>
                <p className="text-muted-foreground mb-4">
                  Hotels, restaurants, and service providers – showcase your business to thousands of travelers 
                  and grow with our subscription plans.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Business listing", "Premium visibility", "Analytics dashboard"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 group/item hover:text-foreground transition-colors duration-200">
                      <Star className="w-4 h-4 text-coral group-hover/item:scale-110 transition-transform duration-200" /> 
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-forest/10 to-forest/5 border border-forest/20 hover:border-forest/50 hover:shadow-2xl hover:shadow-forest/10 transition-all duration-500 hover:-translate-y-2 h-full">
                <Map className="w-10 h-10 text-forest mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Travel Agents</h3>
                <p className="text-muted-foreground mb-4">
                  Create and share stunning itineraries, build your reputation, and connect with travelers 
                  looking for expert guidance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Itinerary builder", "Client management", "Booking integration"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 group/item hover:text-foreground transition-colors duration-200">
                      <Star className="w-4 h-4 text-forest group-hover/item:scale-110 transition-transform duration-200" /> 
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-ocean-dark to-ocean text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-left">
              <p className="text-ocean-light font-semibold uppercase tracking-wider mb-3">About Us</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                We're Passionate About Making Travel Accessible
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Guide-Us was born from a simple idea: travel should be easy, affordable, and enriching for everyone. 
                Our team of travel enthusiasts, tech innovators, and local experts came together to create a platform 
                that bridges the gap between travelers and authentic experiences.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We believe that the best travel experiences come from real connections – with places, cultures, 
                and people. That's why we've built a community-driven platform powered by AI to help you 
                discover hidden gems and create memories that last a lifetime.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "2024", label: "Founded" },
                  { value: "50+", label: "Countries" },
                  { value: "24/7", label: "AI Support" },
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="text-3xl font-heading font-bold group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/30 to-transparent rounded-3xl blur-3xl animate-pulse" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: "Trusted & Secure", desc: "Your data and bookings are always protected" },
                    { icon: Heart, title: "Community First", desc: "Built by travelers, for travelers" },
                    { icon: Sparkles, title: "AI-Powered", desc: "Smart recommendations tailored to you" },
                    { icon: Globe, title: "Global Network", desc: "Local partners in 50+ countries" },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`group p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${i % 2 === 1 ? 'mt-8' : ''}`}
                    >
                      <item.icon className="w-8 h-8 text-coral-light mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of travelers who are already exploring the world with Guide-Us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="xl"
              className="bg-ocean hover:bg-ocean-dark group relative overflow-hidden"
              onClick={() => navigate("/register")}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="group"
              onClick={() => navigate("/login")}
            >
              I already have an account
              <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold group-hover:text-ocean-light transition-colors duration-300">Guide-Us</span>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Your ultimate travel companion. Discover, plan, and explore with confidence.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Destinations", "Community", "Blog"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/60 hover:text-ocean hover:translate-x-1 inline-block transition-all duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Users */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">For Users</h4>
              <ul className="space-y-3">
                {["Travelers", "Local Owners", "Travel Agents", "Pricing Plans", "Partner With Us"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/60 hover:text-ocean hover:translate-x-1 inline-block transition-all duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-ocean group-hover:scale-110 transition-transform duration-200" />
                  <a href="mailto:hello@guide-us.com" className="text-white/60 hover:text-ocean transition-colors duration-200">
                    hello@guide-us.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-ocean group-hover:scale-110 transition-transform duration-200" />
                  <a href="tel:+1234567890" className="text-white/60 hover:text-ocean transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-ocean mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-white/60 group-hover:text-white/80 transition-colors duration-200">
                    123 Travel Street,<br />Adventure City, AC 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Guide-Us. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-ocean transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-ocean text-white shadow-lg flex items-center justify-center hover:bg-ocean-dark hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WelcomePage;
