import { useState, FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading accent="Contact" title="Get In Touch" subtitle="Have a project in mind? Let's talk about how we can help your business grow." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">
          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard hover={false}>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:0111679286" className="text-foreground font-medium">0111 679 286</a>
                    <span className="text-muted-foreground mx-2">|</span>
                    <a href="tel:0728825152" className="text-foreground font-medium">0728 825 152</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:info@abancool.com" className="text-foreground font-medium">info@abancool.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Garissa, Kenya</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <a
              href="https://wa.me/254111679286"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard className="flex items-center gap-4 cursor-pointer">
                <MessageCircle className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">Chat on WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Get instant responses</p>
                </div>
              </GlassCard>
            </a>

            {/* Map */}
            <GlassCard hover={false} className="overflow-hidden p-0">
              <iframe
                title="Abancool Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.95!2d39.6!3d-0.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810f5b5e18ef8f%3A0x8ae4f04f63a14f1a!2sGarissa%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </GlassCard>
          </div>

          {/* Form */}
          <GlassCard hover={false}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name *</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email *</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  maxLength={255}
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Your phone number"
                  maxLength={20}
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message *</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={5}
                  maxLength={1000}
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-blue text-primary-foreground font-semibold">
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default Contact;
