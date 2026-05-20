import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle, Instagram, Linkedin, Github } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const socialLinks = [
    { Icon: Instagram, url: "https://instagram.com/yourusername" },
    { Icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
    { Icon: Github, url: "https://github.com/webrion-services" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgoqvjzz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-x-hidden px-6 py-32 md:px-12">
      <div className="blob -left-20 top-10 h-[420px] w-[420px] bg-accent/40" />
      <div className="blob bottom-0 right-0 h-[360px] w-[360px] bg-primary/20" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</span>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Let&apos;s build something <span className="text-accent">remarkable.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell us about your idea. We reply within one business day.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a
              href="mailto:webrion.services@gmail.com"
              className="flex items-center gap-3 text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>webrion.services@gmail.com</span>
            </a>

            <a
              href="https://wa.me/919664552301"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp · +91 96645 52301
            </a>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:border-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative rounded-3xl border border-border bg-card/70 p-8 backdrop-blur"
        >
          <div className="space-y-5">
            <Field label="Name" id="name" name="name" />
            <Field label="Email" id="email" name="email" type="email" />
            <Field label="Phone" id="phone" name="phone" type="text" />
            <div>
              <label
                htmlFor="msg"
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Project details
              </label>
              <textarea
                id="msg"
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
            )}

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="magnetic group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-medium text-background transition hover:bg-accent hover:text-accent-foreground disabled:opacity-70"
            >
              {status === "sent" ? (
                "Message sent ✓"
              ) : status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  Send message{" "}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        maxLength={120}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
    </div>
  );
}
