import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import ClientMotion from "@/components/ClientMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedesignlabs.agency"),
  alternates: { canonical: "/" },
  title: "The Design Labs | UI/UX, SaaS & Web Design Agency",
  description:
    "Design that makes your product stand out. A product design studio for startups and SaaS, interfaces, brand systems and websites that earn trust at first glance.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "The Design Labs | UI/UX, SaaS & Web Design Agency",
    description: "Design that makes your product stand out.",
    type: "website",
    locale: "en_GB",
    url: "https://www.thedesignlabs.agency/",
    siteName: "The Design Labs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DesignLabs" }],
  },
  twitter: { card: "summary_large_image", title: "The Design Labs | UI/UX, SaaS & Web Design Agency", description: "Design that makes your product stand out." },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}
      data-motion="on"
    >
      <head>
        {/* data-motion is rendered on the server (so hydration matches) and
            removed here, before first paint, for anyone who asked for reduced
            motion — or after 2.5s if the motion layer never reports ready, so
            a failed chunk can never strand hidden content. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;try{" +
              "if(matchMedia('(prefers-reduced-motion: reduce)').matches){d.removeAttribute('data-motion');return;}" +
              "setTimeout(function(){if(!d.hasAttribute('data-motion-ready'))d.removeAttribute('data-motion');},2500);" +
              "}catch(e){d.removeAttribute('data-motion');}})();",
          }}
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.thedesignlabs.agency/#organization",
              name: "The Design Labs",
              alternateName: "DesignLabs",
              url: "https://www.thedesignlabs.agency/",
              logo: "https://www.thedesignlabs.agency/logo.png",
              description: "UI/UX, SaaS, web and mobile app design for startups and growing products.",
              areaServed: "Worldwide",
            },
            {
              "@type": "WebSite",
              "@id": "https://www.thedesignlabs.agency/#website",
              name: "The Design Labs",
              alternateName: "DesignLabs",
              url: "https://www.thedesignlabs.agency/",
              publisher: { "@id": "https://www.thedesignlabs.agency/#organization" },
            },
          ],
        }) }} />
        <ClientMotion />
        {children}
      </body>
    </html>
  );
}
