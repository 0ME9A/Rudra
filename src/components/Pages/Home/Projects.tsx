import { ProjectCardProps } from "@/ts/interfaces";
import ProjectCard from "../../Card/ProjectCard";
import Header from "../../Projects/Header";
import Footer from "../../Projects/Footer";

const projectData: ProjectCardProps[] = [
  {
    id: "01",
    title: "Skyline Atrium",
    desc: "Miami, Florida",
    date: "Year 2024",
    img: {
      src: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "skyline",
      size: { w: 500, h: 500 },
    },
  },
  {
    id: "02",
    title: "Modern Loft",
    desc: "New York, New York",
    date: "Year 2022",
    img: {
      src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "modern loft",
      size: { w: 500, h: 500 },
    },
  },
  {
    id: "03",
    title: "Glass House",
    desc: "Aspen, Colorado",
    date: "Year 2021",
    img: {
      src: "https://images.unsplash.com/photo-1711479613429-41a69babba6d?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "glass house",
      size: { w: 500, h: 500 },
    },
  },
  {
    id: "04",
    title: "Urban Villa",
    desc: "London, United Kingdom",
    date: "Year 2019",
    img: {
      src: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "urban villa",
      size: { w: 500, h: 500 },
    },
  },
];

function Projects() {
  return (
    <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <Header />
      {projectData.map((item) => (
        <ProjectCard
          key={item.title}
          title={item.title}
          desc={item.desc}
          date={item.date}
          img={item.img}
        />
      ))}
      <Footer />
    </section>
  );
}

export default Projects;
