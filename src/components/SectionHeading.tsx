interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

const SectionHeading = ({ title, subtitle, accent }: SectionHeadingProps) => (
  <div className="text-center mb-14">
    {accent && <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-2 block">{accent}</span>}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
