import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Basic Hosting",
    price: "Contact us",
    features: ["5 GB Storage", "50 GB Bandwidth", "1 Email Account", "Free SSL", "Basic Support"],
  },
  {
    name: "Business Hosting",
    price: "Contact us",
    popular: true,
    features: ["20 GB Storage", "200 GB Bandwidth", "10 Email Accounts", "Free SSL", "Daily Backups", "Priority Support"],
  },
  {
    name: "Pro Hosting",
    price: "Contact us",
    features: ["50 GB Storage", "Unlimited Bandwidth", "50 Email Accounts", "Free SSL", "Staging Environment", "24/7 Support"],
  },
  {
    name: "Enterprise Hosting",
    price: "Contact us",
    features: ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Emails", "Free SSL", "Dedicated IP", "Load Balancing", "24/7 Premium Support"],
  },
];

const Hosting = () => (
  <main className="pt-20">
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading accent="Hosting" title="Web Hosting Plans" subtitle="Reliable, fast and secure hosting to keep your business online 24/7." />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <GlassCard key={i} className={`flex flex-col ${plan.popular ? "ring-2 ring-accent glow" : ""}`}>
            {plan.popular && (
              <span className="gradient-blue text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                Recommended
              </span>
            )}
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
            <p className="text-sm text-accent font-medium mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className={`w-full ${plan.popular ? "gradient-blue text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                Get Started
              </Button>
            </Link>
          </GlassCard>
        ))}
      </div>
    </section>
  </main>
);

export default Hosting;
