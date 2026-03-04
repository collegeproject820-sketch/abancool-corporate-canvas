import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Globe, Code, Smartphone, Building2, Settings, Cloud,
  ShoppingCart, MessageSquare, Plane,
} from "lucide-react";

const serviceGroups = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "From simple landing pages to complex web applications.",
    items: ["Business Websites", "E-Commerce Stores", "Portfolio Sites", "Corporate Profiles", "Custom Web Apps"],
  },
  {
    icon: Code,
    title: "Software Development",
    desc: "Tailored software to streamline your operations.",
    items: ["Custom Enterprise Systems", "Automation Tools", "Business Process Software", "Data Analytics Platforms"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences.",
    items: ["Android Applications", "iOS Applications", "Hybrid / Cross-platform Apps", "Progressive Web Apps"],
  },
  {
    icon: Building2,
    title: "System Development",
    desc: "Industry-specific management systems.",
    items: ["Hospital Management System", "School Management System", "Property & Rental System", "Financial & Wallet System", "Inventory Management", "POS Systems"],
  },
  {
    icon: Settings,
    title: "System Integration",
    desc: "Connect and unify your business tools.",
    items: ["API Integration", "Payment Gateway Integration", "SMS Integration", "ERP Integration", "Government Systems Integration"],
  },
  {
    icon: Cloud,
    title: "Web Hosting Services",
    desc: "Reliable hosting to keep you online.",
    items: ["Shared Hosting", "VPS Hosting", "Dedicated Hosting", "Domain Registration", "Email Hosting"],
  },
  {
    icon: ShoppingCart,
    title: "Booking & Flight Systems",
    desc: "End-to-end travel and reservation platforms.",
    items: ["Flight Booking Systems", "Hotel Reservation Systems", "Event Booking Platforms", "Appointment Scheduling", "Tour & Travel Management"],
  },
  {
    icon: MessageSquare,
    title: "Bulk SMS Services",
    desc: "Reach thousands instantly with our SMS solutions.",
    items: ["Bulk SMS Gateway", "SMS API Integration", "Promotional Campaigns", "Transactional SMS", "SMS Reporting & Analytics"],
  },
];

const Services = () => (
  <main className="pt-20">
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading accent="Our Services" title="What We Offer" subtitle="End-to-end technology solutions designed to transform your business." />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {serviceGroups.map((g, i) => (
          <GlassCard key={i}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center">
                <g.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{g.title}</h3>
                <p className="text-xs text-muted-foreground">{g.desc}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>

    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-muted-foreground mb-8">Let's discuss your requirements and build something extraordinary.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-blue text-primary-foreground font-semibold px-8 glow">
            Request a Quote
          </Button>
        </Link>
      </div>
    </section>
  </main>
);

export default Services;
