import { ServiceDataProps } from "@/ts/interfaces";
import ServiceCard from "@/components/Card/ServiceCard";
import React from "react";

const serviceData: ServiceDataProps[] = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "The first step involves meeting with the client to discuss their vision, needs, and budget. This consultation sets the foundation for the entire project.",
    url: "/service/01",
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
    url: "/service/02",
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
    url: "/service/03",
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
    url: "/service/04",
    img: {
      src: "/service/completion.jpg",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
];

function Services() {
  return (
    <div className="max-w-screen-2xl w-full mx-auto p-4">
      {serviceData.map((item) => (
        <ServiceCard
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          url={item.url}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default Services;
