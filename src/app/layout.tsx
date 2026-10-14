import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import ClientMotion from "@/components/ClientMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedesignlabs.agency"),
  alternates: { canonical: "/" },
  title: "DesignLabs | Design for products that are better than they look",
  description:
    "A design studio for technical founders. Product UI, brand systems and launch sites for dev tools and B2B software.",
  openGraph: {
    title: "DesignLabs",
    description: "Design for products that are better than they look.",
    type: "website",
    locale: "en_GB",
    url: "https://www.thedesignlabs.agency/",
    siteName: "DesignLabs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DesignLabs" }],
  },
  twitter: { card: "summary_large_image", title: "DesignLabs", description: "Design for products that are better than they look." },
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
          "@type": "ProfessionalService",
          name: "DesignLabs",
          url: "https://www.thedesignlabs.agency/",
          logo: "https://www.thedesignlabs.agency/logo.png",
          description: "A product design studio for startups and SaaS, interfaces, brand systems and websites.",
          areaServed: "Worldwide",
          serviceType: ["SaaS product design", "Website design", "Web and mobile app design", "Design systems"],
        }) }} />
        <ClientMotion />
        {children}
      </body>
    </html>
  );
}
