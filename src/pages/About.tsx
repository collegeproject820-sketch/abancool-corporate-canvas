import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Target, Eye, Code, Database, Smartphone, Cloud, Shield, Users } from "lucide-react";

const techStack = ["React", "Node.js", "TypeScript", "PostgreSQL", "Flutter", "AWS", "Docker", "REST APIs"];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading accent="About Us" title="Who We Are" subtitle="Abancool Technologies is a full-service technology company based in Garissa, Kenya, delivering world-class digital solutions to businesses across East Africa and beyond." />
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-4xl">
        <GlassCard>
          <Target className="w-10 h-10 text-accent mb-4" />
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To empower businesses with innovative, scalable and affordable technology solutions that drive growth, efficiency and digital transformation.
          </p>
        </GlassCard>
        <GlassCard>
          <Eye className="w-10 h-10 text-accent mb-4" />
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To be the leading technology partner for businesses in Africa, delivering world-class digital solutions that transform industries and communities.
          </p>
        </GlassCard>
      </div>
    </section>

    {/* Expertise */}
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <SectionHeading accent="Expertise" title="What We Excel At" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Code, label: "Web & Software Development" },
            { icon: Smartphone, label: "Mobile App Development" },
            { icon: Database, label: "Enterprise Systems" },
            { icon: Cloud, label: "Cloud & Hosting" },
            { icon: Shield, label: "Cybersecurity" },
            { icon: Users, label: "IT Consultancy" },
          ].map((e, i) => (
            <GlassCard key={i} className="text-center">
              <e.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <span className="text-sm font-medium text-foreground">{e.label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading accent="Technology" title="Our Technology Stack" />
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {techStack.map((t) => (
            <span key={t} className="glass rounded-full px-6 py-2.5 text-sm font-medium text-accent">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
