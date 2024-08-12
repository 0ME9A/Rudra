import React from "react";
import PrimaryLink from "../Links/PrimaryLink";

function Footer() {
  return (
    <div className="bg-white md:bg-transparent relative grid">
      <span
        style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
        className="bg-navy-900 block w-[10%] aspect-square absolute -top-[.2rem] -left-[.2rem]"
      />
      <div className="flex flex-wrap !w-full sm:w-fit items-start gap-2 text-center self-end justify-center pt-32 p-4 sm:p-6 sm:pt-32">
        <PrimaryLink href="/contact" className="w-full !normal-case sm:w-fit">
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
  );
}

export default Footer;
