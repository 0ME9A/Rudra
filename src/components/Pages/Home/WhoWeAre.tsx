import React from "react";

function WhoWeAre() {
  return (
    <section className="bg-white relative clip-path-penta-tl-lg lg:clip-path-penta-tl-2xl">
      <div className="container mx-auto text-center space-y-6 px-2 py-16 lg:py-32">
        <h2 className="text-2xl text-gray-500 uppercase">who we are</h2>
        <h3 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none text-black font-[200]">
          Founded with a passion for design excellence, 24x7 Rudra Creative Home
          Decor & Architects PVT LTD has evolved into a{" "}
          <em className="font-[600] text-accent-500">leading architectural</em>{" "}
          studio.
        </h3>
        {/* <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none text-black font-[200]">
          Founded with a passion for design excellence, Magna has evolved into a{" "}
          <em className="font-[600] text-accent-500">leading architectural</em>{" "}
          studio.
        </p> */}
      </div>
    </section>
  );
}

export default WhoWeAre;
