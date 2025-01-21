import React from "react";

function Header() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <h2 className="text-2xl text-gray-500 uppercase">Our Gallery</h2>
      <p className="capitalize text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none">
        <span className="font-[200]">
          Projects Covering All Construction Needs
        </span>
      </p>
      <p className="text-gray-400">
        We provide comprehensive solutions for construction, interior, exterior,
        2D & 3D design, and more.
      </p>
      <span />
    </div>
  );
}

export default Header;
