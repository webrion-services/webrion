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
      { title: "Webrion — Web Development Agency in India | Custom Websites & Apps" },
      { name: "description", content: "Webrion is a web development agency in India specializing in custom websites, ecommerce platforms, React web apps, SEO, and UI/UX design. Affordable pricing for startups and businesses." },
      { name: "keywords", content: "web development agency India, custom website design, React developer India, ecommerce website development, SEO services India, web app development" },
      { name: "author", content: "Webrion" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Webrion — Web Development Agency in India" },
      { property: "og:description", content: "Custom websites, ecommerce platforms & React web apps. Affordable, fast, and built for growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webrionservices.vercel.app/" },
      { property: "og:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Webrion — Web Development Agency in India" },
      { name: "twitter:description", content: "Custom websites, ecommerce & React apps built for growth." },
      { name: "twitter:image", content: "https://webrionservices.vercel.app/og-image.png" },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad, Gujarat, India" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://res.cloudinary.com/dzijek1ob/image/upload/v1779219614/zeooypgc3shssm8fkwov.png", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "https://res.cloudinary.com/dzijek1ob/image/upload/v1779219614/zeooypgc3shssm8fkwov.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "canonical", href: "https://webrionservices.vercel.app/" },
      { rel: "preload" },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Webrion",
      "url": "https://webrionservices.vercel.app",
      "logo": "https://res.cloudinary.com/dzijek1ob/image/upload/v1779219614/zeooypgc3shssm8fkwov.png",
      "description": "Web development agency in India — custom websites, ecommerce, React apps, SEO",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
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
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are typical project timelines?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most landing sites ship in 1–2 weeks. Marketing sites 2 weeks. Web apps scoped by sprint." } },
        { "@type": "Question", "name": "How does pricing work?",
          "acceptedAnswer": { "@type": "Answer", "text": "Fixed-fee for defined scopes, monthly retainer for ongoing partnerships. Starting from ₹14,999." } },
        { "@type": "Question", "name": "Do you offer website maintenance and support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — uptime monitoring, performance tuning, content updates, and feature work on a monthly plan." } },
        { "@type": "Question", "name": "Which technologies do you use?",
          "acceptedAnswer": { "@type": "Answer", "text": "React, Next.js, TanStack Start, Tailwind CSS, GSAP, Framer Motion, Supabase, Vercel, Cloudflare." } }
      ]
    },
    {
      "@type": "WebSite",
      "url": "https://webrionservices.vercel.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://webrionservices.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
    ]
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