import { metadataDefault, viewport as vp } from "@/data/meta/metadata";
import "@/utils/global";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import CallNow from "@/components/Fix/CallNow";
import ClientLayout from "./clientLayout";
import Nav from "@/components/Nav/Nav";
import "./globals.css";
import ChatNow from "@/components/Fix/ChatNow";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = metadataDefault;
export const viewport = vp;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <ClientLayout>{children}</ClientLayout>
        <ChatNow />
        <CallNow />
        <Footer />
      </body>
    </html>
  );
}
