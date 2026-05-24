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
import { SeoContentBlock } from "@/components/site/SeoContentBlock";

export const Route = createFileRoute("/")({
head: () => ({
  meta: [
    {
      title:
        "Web Development Company in Ahmedabad | SEO & Web Design Agency | Webrion",
    },
    {
      name: "description",
      content:
        "Webrion is a web development company in Ahmedabad providing custom website development, ecommerce solutions, SEO optimization, UI UX design and scalable web application development across India.",
    },
    {
      name: "keywords",
      content:
        "web development company Ahmedabad, SEO agency Ahmedabad, ecommerce development India, custom website development, React web development company, UI UX design agency India",
    },
    {
      property: "og:title",
      content:
        "Web Development Company in Ahmedabad | Webrion",
    },
    {
      property: "og:description",
      content:
        "Custom websites, ecommerce stores, SEO optimization and modern web applications for growing businesses.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "https://webrionservices.vercel.app/og-image.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://webrionservices.vercel.app/",
    },
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
      <SeoContentBlock />
    </main>
  );
}
