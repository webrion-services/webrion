import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { LenisProvider } from "@/components/site/LenisProvider";
import { ScrollProgress } from "@/components/site/ScrollProgress";

// ─── JSON-LD Schema ────────────────────────────────────────────────────────────
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://webrionservices.vercel.app/#business",
      "name": "Webrion",
      "url": "https://webrionservices.vercel.app",
      "logo": "https://webrionservices.vercel.app/favicon-512.png",
      "image": "https://webrionservices.vercel.app/og-image.png",
      "description": "Web development agency in Ahmedabad, India — custom websites, ecommerce platforms, React web apps, SEO optimization, and UI/UX design for startups and businesses worldwide.",
      "priceRange": "₹₹",
      "telephone": "+91-96645-52301",
      "email": "webrionservices@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.0225,
        "longitude": 72.5714
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": ["IN", "US", "GB", "AU", "CA"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-96645-52301",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.instagram.com/webrion.services",
        "https://www.linkedin.com/in/webrion-services-697810410",
        "https://github.com/webrion-services"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://webrionservices.vercel.app/#org",
      "name": "Webrion",
      "url": "https://webrionservices.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webrionservices.vercel.app/favicon-512.png",
        "width": 512,
        "height": 512
      },
      "foundingDate": "2026",
      "founders": [{ "@type": "Person", "name": "Webrion Team" }],
      "description": "Web development studio in Ahmedabad, India — custom websites, ecommerce, React apps, SEO"
    },
    {
      "@type": "WebSite",
      "@id": "https://webrionservices.vercel.app/#website",
      "url": "https://webrionservices.vercel.app",
      "name": "Webrion — Web Development Agency India",
      "publisher": { "@id": "https://webrionservices.vercel.app/#org" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are typical project timelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most landing pages ship in 1–2 weeks. Full marketing sites take 2–3 weeks. Web applications are scoped by sprint. Timelines are adjustable based on your requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a website cost in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website pricing in India depends on the type of website, features, design quality, and development complexity. At Webrion, our Starter package starts from ₹14,999 for up to 5 pages. The Professional package is ₹24,999 for up to 15 pages with CMS integration and advanced SEO. Enterprise and custom web application pricing is quoted per project."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with international clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we work with clients globally and provide complete remote collaboration for website design, development, branding, and digital solutions. We use professional communication and project management tools to ensure smooth workflow across different time zones."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We can redesign your existing website to improve its visual appearance, performance, user experience, mobile responsiveness, SEO structure, and conversion rate — while preserving important content and functionality."
          }
        },
        {
          "@type": "Question",
          "name": "How does pricing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fixed-fee for defined scopes, monthly retainer for ongoing partnerships. We quote up-front with no hidden charges."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website maintenance and support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we offer monthly maintenance plans including uptime monitoring, performance tuning, security updates, content updates, and feature development."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO is built into every project: semantic HTML, structured data markup, Core Web Vitals optimization, and XML sitemaps. Content SEO strategy and keyword targeting are also available as add-ons."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Custom Website Development",
      "provider": { "@id": "https://webrionservices.vercel.app/#business" },
      "areaServed": ["IN", "US", "GB"],
      "description": "Custom-built high-performance websites designed and developed for startups and businesses in India.",
      "offers": { "@type": "Offer", "price": "14999", "priceCurrency": "INR" }
    },
    {
      "@type": "Service",
      "name": "Ecommerce Website Development",
      "provider": { "@id": "https://webrionservices.vercel.app/#business" },
      "areaServed": ["IN", "US", "GB"],
      "description": "Conversion-focused eCommerce platforms with intuitive UX and optimized customer journeys."
    },
    {
      "@type": "Service",
      "name": "SEO Optimization Services",
      "provider": { "@id": "https://webrionservices.vercel.app/#business" },
      "areaServed": ["IN", "US", "GB"],
      "description": "Technical SEO, Core Web Vitals, structured data, and keyword strategy to rank higher on Google."
    },
    {
      "@type": "Service",
      "name": "React Web Application Development",
      "provider": { "@id": "https://webrionservices.vercel.app/#business" },
      "areaServed": ["IN", "US", "GB"],
      "description": "Scalable, production-grade React web applications with clean architecture and optimized performance."
    }
  ]
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "HckkQ8kguedLKBVmHw1AI77NiIVnMBmi8ooVKNWKUIA" },
      { title: "Webrion — Web Development Agency in India | Custom Websites & Apps" },
      {
        name: "description",
        content:
          "Webrion is a web development agency in Ahmedabad, India specializing in custom websites, ecommerce platforms, React web apps, SEO, and UI/UX design. Starting at ₹14,999 for startups and businesses.",
      },
      {
        name: "keywords",
        content:
          "web development agency in India,web devlopment india, website development in ahmedabad,web design, best web developmet in india, custom website design Ahmedabad, React developer India, ecommerce website development India, SEO services India, web app development, website design agency Ahmedabad, hire React developer India",
      },
      { name: "author", content: "Webrion" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      // Open Graph
      { property: "og:title", content: "Webrion — Web Development Agency in India" },
      {
        property: "og:description",
        content:
          "Custom websites, ecommerce platforms & React web apps for Indian startups and global brands. Fast, affordable, and built for growth. Starting at ₹14,999.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Webrion — Web Development Agency in India" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:site_name", content: "Webrion" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Webrion — Web Development Agency in India" },
      {
        name: "twitter:description",
        content: "Custom websites, ecommerce & React apps built for growth. Starting at ₹14,999.",
      },
      { name: "twitter:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "twitter:image:alt", content: "Webrion Web Development Agency India" },
      // Geo / Local SEO
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad, Gujarat, India" },
      { name: "geo.position", content: "23.0225;72.5714" },
      { name: "ICBM", content: "23.0225, 72.5714" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // FIX: Local favicon files for Google Search logo visibility
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      // FIX: dns-prefetch before preconnect for faster resolution
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "dns-prefetch", href: "https://res.cloudinary.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://res.cloudinary.com" },
      { rel: "canonical", href: "https://webrionservices.vercel.app/" },
      // FIX: Font loading moved to non-render-blocking — using &display=swap
      // and loaded via JS instead of a blocking <link> stylesheet
      // The actual font link is injected below as a non-blocking script
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schemaGraph),
      },
      // FIX: Load Google Fonts non-blocking to eliminate render-blocking resource
      {
        type: "text/javascript",
        children: `
          (function() {
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap';
            document.head.appendChild(l);
          })();
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="noise">
        <LoadingScreen />
        <LenisProvider />
        <ScrollProgress />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
