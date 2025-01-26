import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { sitemapFace } from "@/ts/metaface";
import { Metadata, Viewport } from "next";
import { contact } from "../contact";

// Option 1: Extend the existing Verification interface
interface Verification {
  // Existing properties
  bing?: string; // Add the new property with optional typing
}

export const twitter: Twitter = {
  card: "summary_large_image",
  title: "24x7 Rudra Creative Home Decor & Architects",
  description:
    "Rudra Creative: Innovative & elegant interior design & architectural solutions. Bespoke decor, transforming living spaces.",
  siteId: "RudraCreative",
  creator: "@RudraCreative",
  creatorId: "RudraCreative",
  images: ["/assets/images/og-image.webp"], // Use a relevant image
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
      url: "/assets/images/og-image.webp", // Update image path accordingly
      secureUrl: "/assets/images/og-image.webp",
      width: 1200,
      height: 630,
      alt: "24x7 Rudra Creative Home Decor",
    },
  ],
};

export const metadataDefault: Metadata = {
  metadataBase: new URL(contact.website),
  generator: "Next.js",
  title: {
    template: "%s | 24x7 Rudra Home Decor",
    default: "24x7 Rudra Creative Home Decor & Architects",
  },
  keywords: [
    "Drawing Hall Interior Designing Services",
    "The Best Home Contractor In Bihar",
    "Architect for commercial building design",
    "Architect for residential building design",
    "Construction for duplex",
    "Construction for commercial building",
    "Construction for residential building",
    "Architect for hotel | resort | banquet hall | hospital | college | school",
    "Rudra Creative",
    "Home Decor Patna",
    "Interior for residential | commercial",
    "Exterior designer service for banquet hall | hotel",
    "Interior Design Patna",
    "Architecture Patna",
    "Home Improvement Patna",
    "Elegant Designs Patna",
    "Bespoke Furniture Patna",
    "Functional Decor Patna",
    "Luxury Interiors Patna",
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
    "Architecture Services Patna",
    "Construction Services Patna",
    "Exterior Design Patna",
    "Building Construction Patna",
    "Home Construction Patna",
    "Architectural Design Patna",
    "Commercial Construction Patna",
    "Residential Construction Patna",
    "Interior Renovation Patna",
    "Exterior Renovation Patna",
    "House Exterior Design Patna",
    "Office Interior Design Patna",
    "Patna Home Decor Services",
    "Custom Home Design Patna",
    "Patna Architecture Firms",
    "Construction Contractor Patna",
    "Patna Construction Company",
    "Home Remodeling Patna",
    "Modern Architecture Patna",
    "Industrial Construction Patna",
    "Apartment Construction Patna",
    "Exterior Landscaping Patna",
    "3D Architectural Visualization Patna",
    "Interior Decoration Patna",
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
  verification: {
    google: "yuNzFVWe_kNOBiOjV9YZ7T07s0KpcpGJCX1Sr91v8po",
    other: {
      bing: "CE25712044382BA6B25081AD5E4B9A1F",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08081B", // Pick a color that matches the project branding
  colorScheme: "light",
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
    name: "certificate",
    url: "/certificate",
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
