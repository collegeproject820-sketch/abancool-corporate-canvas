import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Starter Website",
    color: "from-emerald-500 to-emerald-600",
    price: "Contact for pricing",
    features: ["5 Pages", "Responsive Design", "Contact Form", "Basic SEO", "Free Hosting 1 Month"],
  },
  {
    name: "Business Website",
    color: "from-accent to-sky-400",
    price: "Contact for pricing",
    popular: true,
    features: ["10 Pages", "Blog Integration", "CMS Dashboard", "Basic Security", "Google Analytics", "Social Media Links"],
  },
  {
    name: "Corporate Website",
    color: "from-violet-500 to-purple-600",
    price: "Contact for pricing",
    features: ["Unlimited Pages", "Custom UI/UX Design", "Admin Panel", "Advanced SEO", "Speed Optimization", "Priority Support"],
  },
  {
    name: "Enterprise Web App",
    color: "from-rose-500 to-red-600",
    price: "Contact for pricing",
    features: ["Custom Backend", "Role-based Dashboard", "API Integration", "Payment Integration", "Full System Architecture", "Dedicated Support"],
  },
];

const Packages = () => (
  <main className="pt-20">
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading accent="Pricing" title="Website Packages" subtitle="Choose the perfect package for your business needs. All packages include responsive design and modern frameworks." />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {packages.map((pkg, i) => (
          <GlassCard key={i} className={`relative flex flex-col ${pkg.popular ? "ring-2 ring-accent glow" : ""}`}>
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-blue text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4`}>
              <span className="text-primary-foreground font-bold text-lg">{i + 1}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
            <p className="text-sm text-accent font-medium mb-6">{pkg.price}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className={`w-full ${pkg.popular ? "gradient-blue text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                Request Quote
              </Button>
            </Link>
          </GlassCard>
        ))}
      </div>
    </section>
  </main>
);

export default Packages;
