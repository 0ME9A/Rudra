import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <header className="space-y-6">
        <h2 className="text-2xl text-gray-500 uppercase">Who we are</h2>
        <h3 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Founded with a passion for design excellence, Magna has evolved into a{" "}
          <em className="font-[600] text-accent-500">leading architectural</em>{" "}
          studio.
        </h3>
      </header>
      <div className="space-y-16">
        <div className="grid md:grid-cols-3 md:gap-4">
          <Image
            src={"/img/team/team_1.jpg"}
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
                Basisth Bansal
              </h2>
              <h3 className="text-gray-500">Founder of the Company</h3>
            </div>
            <p className="sm:text-xl md:text-2xl !leading-normal">
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
            </p>
            <div className="w-1/3 border" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-4">
          <Image
            src={"/img/team/team_2.jpg"}
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
            src={"/img/team/team_3.jpg"}
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
        </div>
        <div />
      </div>
    </section>
  );
}

export default page;
