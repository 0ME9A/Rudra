import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { sitemapFace } from "@/ts/metaface";
import { Metadata, Viewport } from "next";

export const twitter: Twitter = {
  card: "summary_large_image",
  title: "24x7 Rudra Creative Home Decor & Architects",
  description:
    "Rudra Creative: Innovative & elegant interior design & architectural solutions. Bespoke decor, transforming living spaces.",
  siteId: "RudraCreative",
  creator: "@RudraCreative",
  creatorId: "RudraCreative",
  images: ["/assets/images/home-decor-project.jpg"], // Use a relevant image
};

export const og: OpenGraph = {
  title:
    "24x7 Rudra Creative Home Decor & Architects - Innovative Interior and Architectural Designs",
  description:
    "Explore Rudra's creativity in home decor and architecture. We specialize in unique, elegant, and functional designs that elevate any space.",
  url: "https://rudracreativehomedecor.in/",
  siteName: "Rudra Creative",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/assets/images/og-image.png", // Update image path accordingly
      secureUrl: "/assets/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "24x7 Rudra Creative Home Decor",
    },
  ],
};

export const metadataDefault: Metadata = {
  metadataBase: new URL("https://rudracreativehomedecor.in"),
  generator: "Next.js",
  title: {
    template: "%s | 24x7 Rudra Home Decor",
    default: "24x7 Rudra Creative Home Decor & Architects",
  },
  keywords: [
    "Rudra Creative",
    "Home Decor Patna",
    "Interior Design Patna",
    "Architecture Patna",
    "Home Improvement Patna",
    "Elegant Designs Patna",
    "Bespoke Furniture Patna",
    "Functional Decor Patna",
    "Luxury Interiors Patna",
    "Modern Architecture Patna",
    "Creative Spaces Patna",
    "Residential Design Patna",
    "Commercial Interiors Patna",
    "Renovation Services Patna",
    "Sustainable Design Patna",
    "Patna Interior Designers",
    "Custom Home Solutions Patna",
    "Best Home Decor in Patna",
    "Patna Architects",
    "Patna Home Renovation",
    "Top Interior Designers in Patna",
  ],

  applicationName: "Rudra Creative",
  authors: [{ name: "Rudra Creative Team" }],
  creator: "Rudra Creative",
  publisher: "Rudra Creative",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "hi-IN": "/hi-IN", // You can add more languages if needed
    },
  },
  twitter,
  manifest: "/manifest.json",
  openGraph: og,
};

export const viewport: Viewport = {
  themeColor: "#08081B", // Pick a color that matches the project branding
  colorScheme: "dark",
};

export const siteMap: sitemapFace[] = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "services",
    url: "/services",
  },
  {
    name: "projects",
    url: "/projects",
  },
  {
    name: "testimonial",
    url: "/testimonial",
  },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "contact",
    url: "/contact",
  },
  {
    name: "teams",
    url: "/teams",
  },
  {
    name: "careers",
    url: "/careers",
  },
  {
    name: "certificates",
    url: "/certificates",
  },
  {
    name: "privacy_policy",
    url: "/privacy_policy",
  },
  {
    name: "terms_of_service",
    url: "/terms_of_service",
  },
];
