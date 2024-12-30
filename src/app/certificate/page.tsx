import GetCertificateForm from "@/components/Forms/GetCertificateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Certificate - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Search for your certificate details at 24x7 Rudra Creative Home Decor & Architects. Enter a certificate ID to find and view your certificate, internship details, and more.",
  keywords: [
    "certificate search",
    "certificate ID",
    "search certificate",
    "certificate details",
    "24x7 Rudra Creative Home Decor & Architects",
    "internship certificate",
    "web design certificate",
    "architectural certificate",
  ],
};

function Page() {
  return (
    <div className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <GetCertificateForm />
      <div />
    </div>
  );
}

export default Page;
