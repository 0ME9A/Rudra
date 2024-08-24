import PrimaryLink from "@/components/Links/PrimaryLink";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Hero from "./Hero";
import Contact from "./Contact";
import Footer from "@/components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
