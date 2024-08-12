import React from "react";

function WhoWeAre() {
  return (
    <section className="bg-white relative">
      <span
        style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
        className="bg-navy-900 block w-[5rem] md:w-[7rem] aspect-square absolute -top-[.2rem] -left-[.2rem]"
      />
      <div className="max-w-screen-2xl mx-auto text-center space-y-6 px-6 lg:px-16 py-16 lg:py-32">
        <h2 className="text-2xl text-gray-500 uppercase">who we are</h2>
        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none text-black font-[200]">
          Founded with a passion for design excellence, Magna has evolved into a{" "}
          <em className="font-[600] text-accent-500">leading architectural</em>{" "}
          studio.
        </p>
      </div>
    </section>
  );
}

export default WhoWeAre;
