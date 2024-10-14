import React from "react";

function Header() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <h2 className="text-2xl text-gray-500">
        FEATURED <br /> PROJECT
      </h2>
      <p className="capitalize text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none">
        <span className="font-[600]">1.5k</span>
        <span className="text-accent-500 font-[600]">+</span>{" "}
        <span className="font-[200]">Successful Project</span>
      </p>
      <span />
    </div>
  );
}

export default Header;
