import { Check } from "lucide-react";

const plans = [
  {
    name: "Enterprise / Custom",
    price: "Custom",
    period: "Per Project",
    blurb: "For complex products requiring bespoke engineering, custom architecture, and a dedicated team.",
    features: [
      "Unlimited Scale & Pages",
      "Full Design System & Branding",
      "Advanced Web App Engineering",
      "Dedicated Product Team",
      "Priority 24/7 Ongoing Support",
      "Unlimited Marketing Collateral",
    ],
    cta: "Book a Strategy Call",
    highlight: false,
    badge: "Best for Scale",
  },
  {
    name: "Professional",
    price: "₹ 24,999",
    period: "Flat Fee",
    blurb: "The ultimate package for growing brands that want to dominate their market with a high-performance site.",
    features: [
      "Up to 15 Pages + CMS Integration",
      "Advanced SEO & Speed Tuning",
      "Premium Conversion Optimization",
      "5 Rounds of Revisions",
      "5 Premium Promotion Posters",
      "24/7 support",
      "Source Code Delivery",
    ],
    cta: "Get Started Now",
    highlight: true,
    badge: "Most Popular / Best Value",
  },
  {
    name: "Starter",
    price: "₹ 14,999",
    period: "Flat Fee",
    blurb: "Essential features for founders looking to validate their concept with a clean landing page.",
    features: [
      "Up to 5 Pages",
      "100% Responsive Design",
      "Standard SEO Setup",
      "1 Round of Revisions",
      "2 Standard Promotion Posters",
    ],
    cta: "Launch Your Site",
    highlight: false,
    badge: "For Validation",
  },
];

const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById("contact");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Pricing</span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Transparent plans. No surprises.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glow-border relative flex flex-col rounded-3xl border p-8 backdrop-blur transition hover:-translate-y-1 ${
                p.highlight
                  ? "scale-[1.02] border-accent bg-card shadow-[0_30px_80px_-30px] shadow-accent/40"
                  : "border-border bg-card/60"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-muted">
                  Value for money
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div
                className="mt-4 text-5xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.price}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition cursor-pointer ${
                  p.highlight
                    ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                    : "border border-border hover:border-accent"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
