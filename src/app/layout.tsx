import { metadataDefault, viewport as vp } from "@/data/meta/metadata";
import "@/utils/global";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import CallNow from "@/components/Fix/CallNow";
import ChatNow from "@/components/Fix/ChatNow";
import ClientLayout from "./clientLayout";
import Nav from "@/components/Nav/Nav";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId={"GTM-W6PFTZF2"} />
      <GoogleAnalytics gaId="G-7DCZ48R9RS" />

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) in body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6PFTZF2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Nav />
        <ClientLayout>{children}</ClientLayout>
        <ChatNow />
        <CallNow />
        <Footer />
      </body>
    </html>
  );
}
