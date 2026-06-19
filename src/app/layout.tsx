import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Trinco Koko Klub — Boutique Beach Resort, Trincomalee",
    template: "%s | Trinco Koko Klub",
  },
  description:
    "An intimate boutique beach resort on the shores of Trincomalee Bay, Sri Lanka. Experience barefoot luxury, ocean views, and the warmth of Sri Lankan hospitality.",
  keywords: [
    "Trincomalee hotel",
    "Sri Lanka resort",
    "boutique beach resort",
    "Trincomalee Bay",
    "luxury accommodation",
    "Uppuveli beach",
  ],
  openGraph: {
    title: "Trinco Koko Klub — Where the Bay Meets Bliss",
    description:
      "An intimate retreat on the shores of one of Asia's last untouched coastlines.",
    url: "https://trincokokoklub.com",
    siteName: "Trinco Koko Klub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://picsum.photos/seed/trinco-hero/1200/630",
        width: 1200,
        height: 630,
        alt: "Trinco Koko Klub — Trincomalee Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinco Koko Klub — Boutique Beach Resort",
    description:
      "An intimate retreat on the shores of Trincomalee Bay, Sri Lanka.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
