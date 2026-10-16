
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://propertytogo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Property To Go | Properties for Sale Worldwide",
    template: "%s | Property To Go",
  },

  description:
    "Explore houses, villas and properties for sale worldwide. Discover real estate, compare prices in USD and find your next home with Property To Go.",

  applicationName: "Property To Go",

  keywords: [
    "properties for sale",
    "real estate",
    "homes for sale",
    "houses for sale",
    "villas for sale",
    "international real estate",
    "buy property",
    "Property To Go",
  ],

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Property To Go",
    title: "Property To Go | Properties for Sale Worldwide",
    description:
      "Discover properties for sale worldwide. Explore homes, villas and real estate with Property To Go.",
    images: [
      {
        url: "/images/property-to-go-social.jpg",
        width: 1200,
        height: 630,
        alt: "Property To Go — properties for sale worldwide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Property To Go | Properties for Sale Worldwide",
    description:
      "Discover properties for sale worldwide with Property To Go.",
    images: ["/images/property-to-go-social.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
