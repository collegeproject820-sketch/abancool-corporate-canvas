import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Home, Wallet, Network, CheckCircle2 } from "lucide-react";

const systems = [
  {
    icon: Building2,
    title: "Hospital Management System",
    desc: "End-to-end hospital operations management.",
    features: ["Patient Records & History", "Appointment Scheduling", "Pharmacy & Inventory", "Billing & Insurance", "Lab Management", "Multi-branch Support"],
  },
  {
    icon: GraduationCap,
    title: "School Management System",
    desc: "Complete academic institution management.",
    features: ["Student Enrollment", "Grading & Exams", "Fee Management", "Parent Portal", "Attendance Tracking", "Report Generation"],
  },
  {
    icon: Home,
    title: "Property & Rental Management",
    desc: "Simplify property and tenant management.",
    features: ["Tenant Management", "Rent Collection & Invoicing", "Maintenance Requests", "Property Listings", "Financial Reports", "Lease Management"],
  },
  {
    icon: Wallet,
    title: "Financial & Wallet System",
    desc: "Secure financial transactions and wallets.",
    features: ["Digital Wallet", "Transaction Tracking", "Payment Processing", "Financial Reports", "Multi-currency Support", "Fraud Detection"],
  },
  {
    icon: Network,
    title: "Multi-Branch Business System",
    desc: "Manage operations across multiple locations.",
    features: ["Centralized Dashboard", "Branch Performance Tracking", "Inventory Sync", "Employee Management", "POS Integration", "Real-time Analytics"],
  },
];

const Systems = () => (
  <main className="pt-20">
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading accent="Products" title="System Products" subtitle="Ready-to-deploy enterprise systems built for African businesses." />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 space-y-8">
        {systems.map((sys, i) => (
          <GlassCard key={i} className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center">
                <sys.icon className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{sys.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{sys.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {sys.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button size="sm" className="gradient-blue text-primary-foreground">
                  Request Demo
                </Button>
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  </main>
);

export default Systems;
