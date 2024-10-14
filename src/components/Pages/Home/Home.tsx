import Testimonials from "./Testimonials";
import Projects from "./Projects";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Contact from "./Contact";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <div />
    </>
  );
}

export default Home;
