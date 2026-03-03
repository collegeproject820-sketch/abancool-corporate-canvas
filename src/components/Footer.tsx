import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/10 bg-card/50">
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h3 className="font-display text-xl font-bold gradient-text mb-4">Abancool</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A full-service technology company providing web development, enterprise systems,
          integrations, hosting and IT consultancy across Kenya and beyond.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            ["Services", "/services"],
            ["Website Packages", "/packages"],
            ["System Products", "/systems"],
            ["Hosting Plans", "/hosting"],
            ["Contact Us", "/contact"],
          ].map(([label, path]) => (
            <li key={path}>
              <Link to={path} className="hover:text-accent transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4 text-foreground">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Web Development", "Software Development", "Mobile Apps", "System Integration", "Web Hosting"].map(
            (s) => <li key={s}>{s}</li>
          )}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4 text-foreground">Contact</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> 0111 679 286</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> 0728 825 152</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@abancool.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Garissa, Kenya</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Abancool Technologies. All rights reserved.
    </div>
  </footer>
);

export default Footer;
