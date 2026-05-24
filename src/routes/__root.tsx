import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { LenisProvider } from "@/components/site/LenisProvider";
import { ScrollProgress } from "@/components/site/ScrollProgress";

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
            onClick={() => { router.invalidate(); reset(); }}
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

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://webrionservices.vercel.app/#service",
      "name": "Webrion",
      "url": "https://webrionservices.vercel.app",
      "logo": "https://webrionservices.vercel.app/web-app-manifest-512x512.png",
      "image": "https://webrionservices.vercel.app/og-image.png",
      "description": "Ahmedabad based web development and SEO agency providing website development, ecommerce development, UI UX design, SEO optimization and web application development services.",
      "telephone": "+91-96645-52301",
      "email": "webrionservices@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "areaServed": [
        "Ahmedabad",
        "Gujarat",
        "Surat",
        "Patan",
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia"
      ],
      "sameAs": [
        "https://www.instagram.com/webrion.services",
        "https://www.linkedin.com/in/webrion-services-697810410",
        "https://github.com/webrion-services"
      ],
      "serviceType": [
        "Web Development",
        "SEO Services",
        "Ecommerce Development",
        "UI UX Design",
        "Website Maintenance",
        "Web Application Development"
      ]
    },
    {
      "@type": "WebSite",
      "url": "https://webrionservices.vercel.app",
      "name": "Webrion",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://webrionservices.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "Webrion",
      "url": "https://webrionservices.vercel.app",
      "logo": "https://webrionservices.vercel.app/web-app-manifest-512x512.png"
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    document.documentElement.setAttribute("lang", "en");
    document.title = "Webrion — Web Development Agency in India | Custom Websites & Apps";

    // Non-blocking Google Fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(fontLink);

    // JSON-LD schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaGraph);
    document.head.appendChild(script);

    // Meta tags
    const metas: [string, string, string][] = [
      ["name", "description", "Webrion is a web development agency in Ahmedabad, India specializing in custom websites, ecommerce platforms, React web apps, SEO, and UI/UX design. Starting at ₹12,999."],
      ["name", "keywords", "web development agency India, custom website design Ahmedabad, React developer India, ecommerce website development India"],
      ["name", "author", "Webrion"],
      ["name", "robots", "index, follow"],
      ["name", "theme-color", "#0a0a0a"],
      ["name", "geo.region", "IN-GJ"],
      ["name", "geo.placename", "Ahmedabad, Gujarat, India"],
      ["property", "og:title", "Webrion — Web Development Agency in India"],
      ["property", "og:description", "Custom websites, ecommerce platforms & React web apps. Starting at ₹12,999."],
      ["property", "og:type", "website"],
      ["property", "og:url", "https://webrionservices.vercel.app/"],
      ["property", "og:image", "https://webrionservices.vercel.app/og-image.png"],
      ["property", "og:image:width", "1200"],
      ["property", "og:image:height", "630"],
      ["property", "og:site_name", "Webrion"],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", "Webrion — Web Development Agency in India"],
      ["name", "twitter:image", "https://webrionservices.vercel.app/og-image.png"],
    ];
    metas.forEach(([attr, name, content]) => {
      const el = document.createElement("meta");
      el.setAttribute(attr, name);
      el.content = content;
      document.head.appendChild(el);
    });

    // Favicons
    const favicons: { rel: string; href: string; type?: string; sizes?: string }[] = [
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ];
    favicons.forEach(({ rel, href, type, sizes }) => {
      const el = document.createElement("link");
      el.rel = rel;
      el.href = href;
      if (type) el.type = type;
      if (sizes) el.setAttribute("sizes", sizes);
      document.head.appendChild(el);
    });
  }, []);

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
