import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ecommerce-development")({
  head: () => ({
    meta: [
      { title: "Ecommerce Website Development Company in Ahmedabad | Webrion" },
      {
        name: "description",
        content:
          "Ecommerce website development for Indian and international brands. Shopify, WooCommerce, and custom headless stores built to convert and rank.",
      },
      { name: "keywords", content: "ecommerce website development, Shopify development India, ecommerce SEO optimization, online store development" },
      { property: "og:title", content: "Ecommerce Website Development | Webrion" },
      { property: "og:description", content: "Shopify, WooCommerce & headless ecommerce builds for brands in India and abroad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/services/ecommerce-development" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://webrionservices.vercel.app/services/ecommerce-development" }],
  }),
  component: () => (
    <ServicePage
      slug="ecommerce-development"
      tagline="Ecommerce development company"
      title="Ecommerce Website Development"
      intro="From Shopify launches to fully custom headless stores, Webrion builds ecommerce sites that load fast on mobile, rank for product and category searches, and convert browsers into buyers. We've shipped stores from ₹1 lakh single-product launches to multi-vendor marketplaces."
      problemHeading="Why most Indian ecommerce stores leak revenue"
      problem="The default Shopify or WooCommerce theme isn't built for Indian buyer behavior — UPI is buried in checkout, COD logic is broken on cart totals, shipping calculators don't handle pincode routing, and product pages take 5+ seconds to load on a mid-range Android. Each of those issues silently drops conversion by 10-25%. We rebuild the checkout and product experience for how Indian customers actually shop."
      whatYouGet={[
        "Platform recommendation: Shopify, WooCommerce, or custom headless",
        "Mobile-first product pages with sticky add-to-cart",
        "Optimized checkout (UPI, cards, COD, EMI, wallets)",
        "Pincode-based shipping and COD filtering",
        "Product schema for rich results in Google Shopping",
        "Inventory, order, and customer admin training",
        "WhatsApp + email order notifications",
        "Reviews, wishlist, abandoned cart recovery",
      ]}
      process={[
        { title: "Strategy", body: "Catalog audit, competitor analysis, platform recommendation, and conversion-focused IA." },
        { title: "Design", body: "Custom storefront design with focus on product page and checkout — where conversion is won or lost." },
        { title: "Build", body: "Platform development, third-party integrations (payment, shipping, ERP), content migration, QA across devices." },
        { title: "Launch & Optimize", body: "Soft launch, analytics setup, and a 30-day optimization sprint after live data starts flowing." },
      ]}
      techStack={["Shopify", "Shopify Headless (Hydrogen)", "WooCommerce", "Medusa.js", "Next.js Commerce", "Razorpay", "Cashfree", "Shiprocket", "Klaviyo"]}
      outcomes={[
        { metric: "+38%", label: "Avg conversion lift post-redesign" },
        { metric: "2.1s", label: "Avg product page LCP" },
        { metric: "6-12 wk", label: "Typical build time" },
        { metric: "₹75k+", label: "Starting price (Shopify build)" },
      ]}
      faqs={[
        { q: "Should I go with Shopify or build a custom ecommerce site?", a: "Shopify for catalogs under ~5000 SKUs with standard shipping and pricing logic — fastest to launch and lowest maintenance. Custom (or headless Shopify) when you need B2B pricing tiers, complex bundles, multi-vendor flows, or platform fees exceed dev costs." },
        { q: "Can you migrate my existing store to a new platform?", a: "Yes. We've done WooCommerce-to-Shopify, Magento-to-Shopify, and custom-to-headless migrations preserving product data, customer accounts, order history, and SEO rankings." },
        { q: "Do you handle the Indian payment gateway integrations?", a: "Yes — Razorpay, Cashfree, PayU, CCAvenue, Instamojo, and UPI direct. We also handle GST invoicing and Shiprocket/Delhivery shipping integrations." },
        { q: "How do you ensure my store ranks for product searches?", a: "Product schema with reviews, unique meta per category and product, internal linking from category to top sellers, fast LCP on product pages, and an XML sitemap with proper priority weighting." },
        { q: "What about post-launch support?", a: "We offer hourly support and monthly retainers covering new feature builds, A/B tests, conversion optimization, and platform updates." },
      ]}
      relatedServices={[
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/seo-services", label: "SEO Services" },
        { href: "/services/ui-ux-design", label: "UI/UX Design" },
      ]}
      relatedBlogs={[
        { slug: "best-ecommerce-features", title: "Best Ecommerce Website Features for Businesses" },
        { slug: "fast-website-speed-seo", title: "How Fast Website Speed Impacts SEO" },
        { slug: "increase-website-leads-design", title: "How to Increase Website Leads Through Better Design" },
      ]}
    />
  ),
});
