import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageShell({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Breadcrumbs items={crumbs} />
      {children}
      <Footer />
    </main>
  );
}
