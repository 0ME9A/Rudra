import { ServiceDataProps } from "@/ts/interfaces";
import ServiceCardBasic from "@/components/Card/ServiceCardBasic";
import Image from "next/image";
import React from "react";

const serviceData: ServiceDataProps[] = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "The first step involves meeting with the client to discuss their vision, needs, and budget. This consultation sets the foundation for the entire project.",
    url: "/service/initial_consultation",
    img: {
      src: "/service/initialconsultation.jpg",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
  {
    id: "02",
    title: "Concept Design",
    desc: "Based on the initial consultation, we create conceptual designs that reflect the client’s vision. This phase includes sketches, mood boards, and preliminary layouts.",
    url: "/service/concept_design",
    img: {
      src: "/service/conceptdesign.jpg",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
  {
    id: "03",
    title: "Development",
    desc: "In the development phase, detailed designs are created, materials are selected, and any technical aspects are addressed. This is where the project takes shape.",
    url: "/service/development",
    img: {
      src: "/service/development.jpg",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
  {
    id: "04",
    title: "Completion",
    desc: "The final phase involves the execution of the design plan, ensuring everything is built and finished to the highest standards. We finalize the project and hand over the keys.",
    url: "/service/completion",
    img: {
      src: "/service/completion.jpg",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
];

function page() {
  return (
    <section className="container mx-auto p-4 pb-8 sm:pb-16 md:pb-24 lg:pb-32">
      <Image
        src={"/service/initialconsultation.jpg"}
        alt={"Initial Consultation Preview"}
        width={1000}
        height={1000}
        quality={100}
        blurDataURL="data:..."
        placeholder="blur"
        className="w-full object-cover bg-white clip-path-penta-tl-sm"
      />
      <h1 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] font-[200] mt-4">
        Initial Consultation
      </h1>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="leading-relaxed md:leading-normal lg:col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error
            voluptatibus veritatis voluptate beatae odio maxime iusto fugiat
            delectus, quibusdam mollitia doloribus aliquam voluptatum
            repudiandae, necessitatibus modi quisquam nobis ratione? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Harum error
            voluptatibus veritatis voluptate beatae odio maxime iusto fugiat
            delectus, quibusdam mollitia doloribus aliquam voluptatum
            repudiandae, necessitatibus modi quisquam nobis ratione?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error
            voluptatibus veritatis voluptate beatae odio maxime iusto fugiat
            delectus, quibusdam mollitia doloribus aliquam voluptatum
            repudiandae, necessitatibus modi quisquam nobis ratione?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error
            voluptatibus veritatis voluptate beatae odio maxime iusto fugiat
            delectus, quibusdam mollitia doloribus aliquam voluptatum
            repudiandae, necessitatibus modi quisquam nobis ratione?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error
            voluptatibus veritatis voluptate beatae odio maxime iusto fugiat
            delectus, quibusdam mollitia doloribus aliquam voluptatum
            repudiandae, necessitatibus modi quisquam nobis ratione?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error
            voluptatibus veritatis voluptate beatae odio maxime iusto fugiat
            delectus, quibusdam mollitia doloribus aliquam voluptatum
            repudiandae, necessitatibus modi quisquam nobis ratione?{" "}
          </p>
        </div>
        <div className="w-full h-fit bg-gray-500 clip-path-penta-tl-sm">
          {serviceData.map((item) => (
            <ServiceCardBasic
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              url={item.url}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
