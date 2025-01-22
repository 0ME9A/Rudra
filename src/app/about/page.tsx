import Image from "next/image";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Learn about 24x7 Rudra Creative Home Decor & Architects, a top firm in the Patna region, specializing in innovative interior design and architectural solutions. Discover our expertise in home decor and architecture, delivering exceptional results across the region.",
  keywords: [
    "about us",
    "24x7 Rudra Creative Home Decor & Architects",
    "interior design Patna",
    "architecture Patna",
    "home decor Patna region",
    "Patna design expertise",
    "architectural solutions Patna",
    "innovative design Patna",
    "decor services Patna",
  ],
};

function page() {
  return (
    <section className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <header className="space-y-6">
        <h2 className="text-2xl text-gray-500 uppercase">Who we are</h2>
        <h3 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Founded with a passion for design excellence, 24x7 Rudra Creative Home
          Decor & Architects PVT LTD has evolved into a{" "}
          <em className="font-[600] text-accent-500">leading architectural</em>{" "}
          studio.
        </h3>
      </header>
      <div className="space-y-16">
        <div className="grid md:grid-cols-3 md:gap-4">
          <Image
            src={"/img/team/team_1.webp"}
            alt={"The company owner"}
            width={"500"}
            height={"500"}
            quality={100}
            blurDataURL="data:..."
            placeholder="blur"
            className="w-full object-cover aspect-square clip-path-penta-tl-sm md:clip-path-penta-tl-md"
          />
          <div className="col-span-2 pt-4 md:pt-10 space-y-4">
            <div>
              <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-none font-[200] text-accent-500">
                Vivek Raj
              </h2>
              <h3 className="text-gray-500">Founder of the Company</h3>
            </div>
            <p className="text-xl leading-relaxed mb-6">
              Welcome to{" "}
              <strong>
                24x7 Rudra Creative Home Decor & Architects PVT LTD
              </strong>
              , where creativity meets craftsmanship. With a proud history
              spanning over <strong>7 years</strong>, we have established
              ourselves as a leader in the fields of{" "}
              <strong>interior design</strong> and <strong>architecture</strong>
              , serving both residential and commercial clients.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Located in <strong>Anisabad, Patna, Bihar</strong>, we operate
              with a singular vision: to create spaces that are not only
              aesthetically stunning but also deeply functional. Our talented
              team of designers brings expertise, innovation, and passion to
              every project we undertake. We specialize in transforming spaces,
              ensuring that each project reflects the unique vision of our
              clients, while maintaining practicality and modern aesthetics.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Over the years, we have successfully{" "}
              <strong>conceptualized and completed numerous projects</strong>,
              ranging from elegant residential interiors to high-profile
              commercial spaces and architectural ventures. We pride ourselves
              on delivering finely crafted designs, whether it’s a cozy home
              renovation or a large-scale architectural project. Our designs are
              powered by creativity, attention to detail, and a commitment to
              exceeding client expectations.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The heart of our success lies in our collaborative approach. We
              work closely with our clients to ensure that every design element
              resonates with their vision, while also incorporating our industry
              expertise. With a team of renowned designers and architects, we
              bring ideas to life and deliver exceptional results that combine
              functionality, innovation, and timeless beauty.
            </p>

            <p className="text-lg leading-relaxed">
              At <strong>24x7 Rudra Creative Home Decor & Architects</strong>,
              we are passionate about creating spaces that not only meet but
              exceed expectations. We invite you to explore our portfolio and
              join us on this creative journey as we continue to shape the
              future of design and architecture.
            </p>
            {/* <p className="sm:text-xl md:text-2xl !leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto id at dignissimos sequi repellendus! Officia
              consequuntur cum sit commodi dignissimos sequi repellendus!
              Officia consequuntur cum sit commodi voluptatem, libero,
              perspiciatis ipsum repellendus unde nulla rem quasi illum
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Architecto id at dignissimos sequi repellendus! Officia
              consequuntur cum sit commodi voluptatem, libero, perspiciatis
              ipsum repellendus unde nulla rem quasi illum accusantium. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Architecto id
              at dignissimos sequi repellendus! Officia consequuntur cum sit
              commodi voluptatem, libero, perspiciatis ipsum repellendus unde
              nulla rem quasi illum accusantium.
            </p> */}
            <div className="w-1/3 border" />
          </div>
        </div>
        {/* <div className="grid md:grid-cols-3 md:gap-4">
          <Image
            src={"/img/team/team_2.webp"}
            alt={"The company owner"}
            width={"500"}
            height={"500"}
            quality={100}
            blurDataURL="data:..."
            placeholder="blur"
            className="w-full object-cover aspect-square clip-path-penta-tl-sm md:clip-path-penta-tl-md"
          />
          <div className="col-span-2 md:row-start-1 pt-4 md:pt-10 space-y-4">
            <div>
              <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-none font-[200] text-accent-500">
                Shubham Sharma
              </h2>
              <h3 className="text-gray-500">Product Manager</h3>
            </div>
            <p className="sm:text-xl md:text-2xl !leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto id at dignissimos sequi repellendus! Officia
              consequuntur cum sit commodi dignissimos sequi repellendus!
              Officia consequuntur cum sit commodi voluptatem, libero,
              perspiciatis ipsum repellendus unde nulla rem quasi illum
              accusantium. Lorem ipsum dolor sit amet
            </p>
            <div className="w-1/3 border" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-4">
          <Image
            src={"/img/team/team_3.webp"}
            alt={"The company owner"}
            width={"500"}
            height={"500"}
            quality={100}
            blurDataURL="data:..."
            placeholder="blur"
            className="w-full object-cover aspect-square clip-path-penta-tl-sm md:clip-path-penta-tl-md"
          />
          <div className="col-span-2 pt-4 md:pt-10 space-y-4">
            <div>
              <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-none font-[200] text-accent-500">
                Karina Singh
              </h2>
              <h3 className="text-gray-500">Project Executer</h3>
            </div>
            <p className="sm:text-xl md:text-2xl !leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto id at dignissimos sequi repellendus! Officia
              consequuntur cum sit commodi dignissimos sequi repellendus!
              Officia consequuntur cum sit commodi voluptatem, libero,
              perspiciatis ipsum repellendus unde nulla rem quasi illum
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Architecto id at dignissimos sequi repellendus! Officia
              consequuntur cum sit commodi voluptatem.
            </p>
            <div className="w-1/3 border" />
          </div>
        </div> */}
        <div />
      </div>
    </section>
  );
}

export default page;
