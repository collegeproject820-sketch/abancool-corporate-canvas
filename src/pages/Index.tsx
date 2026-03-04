import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Globe, Code, Smartphone, Server, Settings, Cloud,
  Building2, GraduationCap, Home, Wallet, BarChart3,
  CheckCircle2, Users, Zap, Shield, Plane, MessageSquare,
} from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support" },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Business websites, e-commerce, and custom web applications" },
  { icon: Code, title: "Software Development", desc: "Custom enterprise systems and automation tools" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Android, iOS, and hybrid mobile applications" },
  { icon: Server, title: "System Development", desc: "Hospital, School, Rental and Financial systems" },
  { icon: Settings, title: "Integrations", desc: "M-Pesa, SMS, Payment gateways, APIs & more" },
  { icon: Cloud, title: "Web Hosting", desc: "Shared, VPS, Dedicated hosting and domains" },
  { icon: Plane, title: "Booking & Flights", desc: "Flight booking, hotel reservations, and travel platforms" },
  { icon: MessageSquare, title: "Bulk SMS", desc: "Mass messaging, SMS API, and campaign management" },
];

const industries = [
  { icon: Building2, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Home, label: "Real Estate" },
  { icon: Wallet, label: "Finance" },
  { icon: BarChart3, label: "Business" },
];

const whyUs = [
  { icon: CheckCircle2, title: "Proven Track Record", desc: "150+ successful projects delivered across industries" },
  { icon: Users, title: "Dedicated Team", desc: "Expert developers, designers and project managers" },
  { icon: Zap, title: "Fast Delivery", desc: "Agile development with rapid turnaround times" },
  { icon: Shield, title: "Reliable & Secure", desc: "Enterprise-grade security and 99.9% uptime" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Technology background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-semibold text-accent mb-6 animate-fade-in">
            🚀 Full-Service Technology Company
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building Smart Digital
            <br />
            <span className="gradient-text">Solutions</span> for Modern Businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We build websites, apps, software systems & enterprise solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact">
              <Button size="lg" className="gradient-blue text-primary-foreground font-semibold px-8 glow">
                Get a Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-t border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <GlassCard key={i} hover={false} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading accent="What We Do" title="Our Services" subtitle="Comprehensive technology solutions to power your business growth." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <GlassCard key={i}>
                <s.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4">
          <SectionHeading accent="Industries" title="Industries We Serve" subtitle="Delivering tailored solutions across key sectors." />
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind, i) => (
              <GlassCard key={i} className="flex items-center gap-3 px-8">
                <ind.icon className="w-8 h-8 text-accent" />
                <span className="font-display font-semibold text-foreground">{ind.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading accent="Why Us" title="Why Choose Abancool?" subtitle="We combine technical expertise with a deep understanding of your business needs." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyUs.map((w, i) => (
              <GlassCard key={i}>
                <w.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <GlassCard hover={false} className="text-center py-16 glow">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss your project and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-blue text-primary-foreground font-semibold px-8">
                  Get Started Today
                </Button>
              </Link>
              <a href="https://wa.me/254728825152" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default Index;
