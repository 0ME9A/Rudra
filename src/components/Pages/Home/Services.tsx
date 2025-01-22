import { ServiceDataProps } from "@/ts/interfaces";
import ServiceCard from "@/components/Card/ServiceCard";

const serviceData: ServiceDataProps[] = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "The first step involves meeting with the client to discuss their vision, needs, and budget. This consultation sets the foundation for the entire project.",
    url: "/service/initial_consultation",
    img: {
      src: "/service/initialconsultation.webp",
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
      src: "/service/conceptdesign.webp",
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
      src: "/service/development.webp",
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
      src: "/service/completion.webp",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
];

function Services({ data }: { data: ServiceDataProps[] }) {
  return (
    <div className="">
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
