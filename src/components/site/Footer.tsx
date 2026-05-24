"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";


export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-black px-6 py-20 text-white md:px-12">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-85 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/17 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16">
        {/* Top */}
        <div className="flex flex-col justify-between gap-14 md:flex-row">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>

              <h2
                className="text-2xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Webrion
              </h2>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Webrion is a web development studio based in Ahmedabad, India. We build custom websites, ecommerce platforms, and React web apps for startups and businesses worldwide. Starting at ₹14,999.
            </p>

            <div className="mt-8 flex gap-4">
              <SocialLink
                label="Instagram"
                link="https://www.instagram.com/webrion.services?utm_source=qr"
              />

              <SocialLink
                label="LinkedIn"
                link="https://www.linkedin.com/in/webrion-services-697810410"
              />

              <SocialLink label="GitHub" link="https://github.com/webrion-services" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">

            <FooterCol
              title="Services"
              links={["Web Development", "SEO Services", "Ecommerce", "UI/UX Design", "Web Apps", "Maintenance"]}
              urls={[
                "/services/web-development",
                "/services/seo-services",
                "/services/ecommerce-development",
                "/services/ui-ux-design",
                "/services/web-application-development",
                "/services/website-maintenance",
              ]}
            />

            <FooterCol
              title="Company"
              links={["About", "Portfolio", "Case Studies", "Contact"]}
              urls={["/about", "/portfolio", "/case-studies", "/contact"]}
            />

            <FooterCol
              title="Resources"
              links={["Blog", "Pricing", "FAQ", "Process"]}
              urls={["/blogs", "/#pricing", "/#faq", "/#process"]}
            />

            <FooterCol
              title="Legal"
              links={["Privacy Policy", "Terms & Conditions", "Instagram", "LinkedIn"]}
              urls={[
                "/privacy-policy",
                "/terms-and-conditions",
                "https://www.instagram.com/webrion.services?utm_source=qr",
                "https://www.linkedin.com/in/webrion-services-697810410",
              ]}
            />

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Webrion services. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <span>Back to top</span>

            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Components ---------------- */

function FooterCol({
  title,
  links,
  urls,
}: {
  title: string;
  links: string[];
  urls: string[];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-white/40">
        {title}
      </div>

      <ul className="mt-5 space-y-3">
        {links.map((link, index) => (
          <li key={link}>
            <a
              href={urls[index]}
              className="group relative inline-block overflow-hidden text-white/60 transition-colors duration-300 hover:text-white"
            >
              <span className="relative z-10">{link}</span>

              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  label,
  link,
}: {
  label: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
    >
      {label}
    </a>
  );
}
