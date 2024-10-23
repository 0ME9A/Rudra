import { Metadata } from "next/types";
import Index from "@/components/Pages/Service/Index";

export const metadata: Metadata = {
  title: "Services - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Explore the professional services offered by 24x7 Rudra Creative Home Decor & Architects in the Patna region. We specialize in home decor, interior design, and architectural services to create beautiful, functional spaces.",
  keywords: [
    "services",
    "home decor services",
    "interior design",
    "architectural services",
    "Patna home decor",
    "Patna interior design",
    "Patna architecture",
    "24x7 Rudra Creative Home Decor & Architects",
    "Patna region",
  ],
};

function page() {
  return (
    <section className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <div className="space-y-6">
        <h2 className="text-2xl text-gray-500 uppercase">service</h2>
        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          We Provide <br /> the Best in Class Services <br /> for Our
          <em className="font-[600]">Customers</em>
        </p>
      </div>
      <Index />
      <div />
    </section>
  );
}

export default page;
