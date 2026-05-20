import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { StoryScroll } from "@/components/site/StoryScroll";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webrion — Modern Web Development Studio" },
      {
        name: "description",
        content:
          "Webrion is a premium web development studio building fast, scalable and visually stunning websites and web apps for ambitious teams.",
      },
      { property: "og:title", content: "Webrion — Modern Web Development Studio" },
      { property: "og:description", content: "Premium websites and web apps for startups, brands, and modern businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
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
      <Footer />
    </main>
  );
}
