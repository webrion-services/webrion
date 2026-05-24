import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { SchemaJsonLd } from "./SchemaJsonLd";

export type Crumb = { label: string; href: string };

const SITE = "https://webrionservices.vercel.app";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE}${c.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto mt-28 max-w-6xl px-6 text-sm text-muted-foreground"
    >
      <SchemaJsonLd schema={schema} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="text-foreground">
                  {c.label}
                </span>
              ) : (
                <Link to={c.href} className="hover:text-foreground transition-colors">
                  {c.label}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
