"use client";
import { usePathname, useRouter } from "next/navigation";
import { contact } from "@/data/contact";
import { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import PrimaryLink from "../Links/PrimaryLink";
import Link from "next/link";

const navItems = [
  // { id: "0", name: "home", link: "/" },
  { id: "1", name: "service", link: "/service" },
  { id: "2", name: "projects", link: "/projects" },
  { id: "3", name: "testimonial", link: "/testimonial" },
  { id: "4", name: "about us", link: "/about" },
];

function Nav() {
  const router = useRouter();
  const path = usePathname();
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className="w-full relative top-0 z-50">
        <nav className="container flex justify-between items-center mx-auto p-2 py-4 md:p-4 lg:py-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              <Link href="/" className="text-accent-500">
                24x7 RUDRA
              </Link>
            </h1>
            <span className={"text-[.8rem]"}>
              Creative Home Decor & Architects
            </span>
          </div>
          <ul className="hidden md:flex items-center md:w-1/2 lg:w-1/3 justify-between capitalize font-[300]">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  title={item.name}
                  className={`${
                    `/${path.split("/")[1]}` === item.link
                      ? "text-accent-500"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryBtn
            onClick={() => router.push("/contact")}
            className="hidden md:block"
          >
            Contact Us
          </PrimaryBtn>
          <button
            type="button"
            title={!menuState ? "Open menu" : "Close menu"}
            className="text-accent-500 text-3xl space-y-2 md:hidden"
            onClick={() => setMenuState(!menuState)}
            aria-expanded={!menuState}
          >
            <span className="w-6 border block border-accent-500"></span>
            <span
              className={`w-6 border block ${
                menuState ? "" : "border-accent-500"
              }`}
            ></span>
          </button>
        </nav>
      </div>
      <div
        className={`max-w-sm w-full h-dvh flex flex-col bg-navy-800 fixed z-40 top-0 pt-16 duration-300 md:hidden overflow-y-auto ${
          menuState ? "right-0" : "-right-full"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto p-4 md:p-4 space-y-6">
          <span className="text-sm font-[200] block lg:block bg-navy-900/50 p-4 md:w-fit">
            24×7 Rudra creative home decor & architects pvt ltd
          </span>
          <ul className="items-center justify-between capitalize font-[300] space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  title={item.name}
                  className={`text-xl hover:pl-2 duration-300 ${
                    `/${path.split("/")[1]}` === item.link
                      ? "text-accent-500"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <span className="block w-1/2 border border-gray-500"></span>
        </div>
        <div className="h-full" />
        <div className="grid grid-cols-1 gap-2 p-4 text-center">
          <PrimaryLink href="/contact">Contact us</PrimaryLink>
          <PrimaryLink
            href={`tel:+91${contact.primaryPhone}`}
            transparent={true}
          >
            Book a call
          </PrimaryLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
