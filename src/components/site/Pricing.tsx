import { Check } from "lucide-react";

const plans = [
  {
    name: "Enterprise / Custom",
    price: "Custom",
    period: "Per Project",
    blurb:
      "For complex products requiring bespoke engineering, custom architecture, and a dedicated team.",
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
    period: "One-time payment",
    blurb:
      "The ultimate package for growing brands that want to dominate their market with a high-performance site.",
    features: [
      "Up to 15 Pages + CMS Integration",
      "Advanced SEO & Speed Tuning",
      "Premium Conversion Optimization",
      "5 Rounds of Revisions",
      "5 Premium Promotion Posters",
      "24/7 Support",
      "Source Code Delivery",
    ],
    cta: "Get Started Now",
    highlight: true,
    badge: "Most Popular / Best Value",
  },
  {
    name: "Starter",
    price: "₹ 12,999",
    period: "Flat Fee",
    blurb:
      "Essential features for founders looking to launch with a clean, fast, and SEO-optimized website.",
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

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Pricing
          </span>
          {/* FIX: H2 now includes keyword "Website Development Pricing in India" */}
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Website Development Pricing in India — Transparent, No Surprises.
          </h2>
          {/* FIX: Added supporting subtext with price anchor for long-tail keyword */}
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            All packages include source code delivery, responsive design, and SEO setup.
            Starting at ₹12,999 for Indian startups and businesses.
          </p>
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
              <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition cursor-pointer relative z-50 ${
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

        {/* FIX: Added internal link to contact + brief trust note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Not sure which plan fits?{" "}
          <a href="#contact" className="text-accent hover:underline">
            Drop us a message
          </a>{" "}
          — we'll recommend the right scope for your project.
        </p>
      </div>
    </section>
  );
}
