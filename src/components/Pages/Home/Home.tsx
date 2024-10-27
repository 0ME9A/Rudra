import Testimonials from "./Testimonials";
import AllServices from "./AllServices";
import Projects from "./Projects";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Projects />
      <AllServices />
      <Testimonials />
      <Contact />
      <div />
    </>
  );
}

export default Home;
