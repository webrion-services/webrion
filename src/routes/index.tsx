import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";

const Stats = lazy(() =>
  import("@/components/site/Stats").then((m) => ({ default: m.Stats }))
);

const StoryScroll = lazy(() =>
  import("@/components/site/StoryScroll").then((m) => ({
    default: m.StoryScroll,
  }))
);

const Services = lazy(() =>
  import("@/components/site/Services").then((m) => ({
    default: m.Services,
  }))
);

const Projects = lazy(() =>
  import("@/components/site/Projects").then((m) => ({
    default: m.Projects,
  }))
);

const About = lazy(() =>
  import("@/components/site/About").then((m) => ({
    default: m.About,
  }))
);

const Process = lazy(() =>
  import("@/components/site/Process").then((m) => ({
    default: m.Process,
  }))
);

const Testimonials = lazy(() =>
  import("@/components/site/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);

const Pricing = lazy(() =>
  import("@/components/site/Pricing").then((m) => ({
    default: m.Pricing,
  }))
);

const FAQ = lazy(() =>
  import("@/components/site/FAQ").then((m) => ({
    default: m.FAQ,
  }))
);

const Contact = lazy(() =>
  import("@/components/site/Contact").then((m) => ({
    default: m.Contact,
  }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webrion — Modern Web Development Studio" },
      {
        name: "description",
        content:
          "Webrion is a premium web development studio building fast, scalable and visually stunning websites and web apps for ambitious teams.",
      },
    ],
  }),
  component: Index,
});

function Loader() {
  return (
    <div className="py-20 text-center text-sm opacity-60">
      Loading...
    </div>
  );
}

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <Suspense fallback={<Loader />}>
        <Stats />
        <StoryScroll />
        <Services />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
}