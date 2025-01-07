import { contact } from "@/data/contact";
import PrimaryLink from "../Links/PrimaryLink";
import React from "react";

function Footer() {
  return (
    <div className="relative grid">
      <div className="flex flex-wrap !w-full sm:w-fit items-start gap-2 text-center self-end justify-center pt-32 p-4 sm:p-6 sm:pt-32 bg-white md:bg-transparent clip-path-penta-tl-sm md:clip-path-penta-tl-md">
        <PrimaryLink href="/contact" className="w-full !normal-case sm:w-fit">
          Contact us
        </PrimaryLink>
        <PrimaryLink
          href={`tel:+91${contact.primaryPhone}`}
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
