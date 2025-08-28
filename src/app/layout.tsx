// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UniWriter UK",
    template: "%s | UniWriter UK",
  },
  description:
    "UniWriter UK — expert UK assignment support (model answers, editing, tutoring). Fast quotes, secure, GDPR-ready.",
  metadataBase: new URL("https://www.uniwriteruk.com/"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }, // 512×512
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "UniWriter UK",
    description:
      "Expert UK assignment help — On Time, Every Time. Model answers, editing, and tutoring.",
    url: "https://www.uniwriteruk.com/",
    siteName: "UniWriter UK",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniWriter UK",
    description:
      "Expert UK assignment help — On Time, Every Time. Model answers, editing, and tutoring.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://www.uniwriteruk.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
