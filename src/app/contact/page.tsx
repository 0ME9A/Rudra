import ContactForm from "@/components/Forms/ContactForm";
import Image from "next/image";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Get in touch with 24x7 Rudra Creative Home Decor & Architects in the Patna region. Reach out for inquiries about our interior design and architecture services. Contact us today to start your home decor journey.",
  keywords: [
    "contact us",
    "24x7 Rudra Creative Home Decor & Architects",
    "interior design Patna",
    "architecture services Patna",
    "home decor Patna",
    "Patna region decor services",
    "get in touch Rudra Creative",
    "contact details Rudra Creative",
  ],
};

function contact() {
  return (
    <div className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <section>
        <div className="grid grid-cols-3 items-center">
          <p className="text-2xl col-span-1 hidden md:block">
            Build Future with <br /> Empowering vision
          </p>
          <div className="col-span-2 space-y-6">
            <h2 className="text-2xl text-gray-500 uppercase">
              BOOK YOUR <br /> CALL
            </h2>
            <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
              Transforming spaces with Vision{" "}
              <em className="font-[600]">Architectural Solutions</em>
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={1000}
            height={1000}
            alt=""
            quality={100}
            loading="lazy"
            blurDataURL="data:..."
            placeholder="blur"
            className="w-full h-full bg-accent-500 object-cover absolute"
            style={{
              clipPath:
                "polygon(0 5rem, 70% 5rem, calc(70% + 5rem) 0, 100% 0%, 100% calc(100% - 5rem), calc(100% - 5rem) 100%, 0 100%)",
            }}
          />
          <div className="w-full h-full relative !pt-[7rem] p-2 md:p-[2rem]">
            <div className="bg-white max-w-lg w-full p-6 space-y-4 rounded-lg">
              <div className="text-black font-[500]">
                <h2 className="text-3xl">Get in Touch</h2>
                <p>You can reach us anytime</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <div />
    </div>
  );
}

export default contact;
