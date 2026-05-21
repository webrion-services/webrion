# OG Image Required

Create a file named `og-image.png` in this folder (`src/src/public/`).

**Specs:**
- Size: 1200 × 630 pixels (standard OG image dimensions)
- Format: PNG
- File name: `og-image.png`

**What to include:**
- Webrion logo (centered or left-aligned)
- Tagline: "Web Development Agency in India"
- Subtext: "Custom Websites · Ecommerce · React Apps"
- Starting price: "Starting at ₹14,999"
- Dark background (#0a0a0a) with your accent color (#3B52FF) accents
- Brand font: Space Grotesk

**Tools to create it:**
- Figma (recommended) — export as PNG 1200×630
- Canva — custom size 1200×630
- Or use a service like https://og-playground.vercel.app

**Why this matters:**
Every WhatsApp share, LinkedIn post, Twitter/X card, and Google search
preview card will use this image. Without it, social shares show a blank/broken card.

Once created, the meta tag in __root.tsx already points to the correct URL:
  og:image → https://webrionservices.vercel.app/og-image.png
  twitter:image → https://webrionservices.vercel.app/og-image.png
