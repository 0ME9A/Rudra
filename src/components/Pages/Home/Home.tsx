import PrimaryLink from "@/components/Links/PrimaryLink";
import Projects from "./Projects";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";

function Home() {
  return (
    <>
      <section className="max-w-screen-2xl w-full p-4 pt-24 mx-auto grid md:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center border-red-500 gap-10 xl:gap-24">
          <h2 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            Innovative <br />{" "}
            <b className="italic font-[600]"> Architecture </b>
            for Modern Space
          </h2>
          <div className="flex items-start flex-wrap gap-4 md:gap-6">
            <p className="text-xl lg:text-2xl font-[300] text-gray-500 sm:w-1/2">
              Simply contact us to make your dream true
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-fit items-start gap-2 text-center">
              <PrimaryLink href="/contact" className="w-full sm:w-fit">
                Contact us
              </PrimaryLink>
              <PrimaryLink
                href="tel:+919304982636"
                className="w-full sm:w-fit !normal-case"
                transparent={true}
              >
                Book a Call
              </PrimaryLink>
            </div>
          </div>
          <div></div>
        </div>
        <div className="p-16 border-red-500 row-start-1 md:row-auto h-full"></div>
      </section>
      <WhoWeAre />
      <Projects />
      <Services />
    </>
  );
}

export default Home;
