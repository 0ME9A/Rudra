import Image from "next/image";
import SubscribeForm from "../Forms/SubscribeForm";
import Link from "next/link";

const siteMap = [
  { id: "0", name: "home", link: "/" },
  { id: "1", name: "service", link: "/service" },
  { id: "2", name: "projects", link: "/projects" },
  { id: "3", name: "testimonial", link: "/testimonial" },
  { id: "4", name: "contact", link: "/contact" },
];
const company = [
  { id: "0", name: "about us", link: "/about" },
  { id: "1", name: "our teams", link: "/teams" },
  { id: "2", name: "careers", link: "/careers" },
  { id: "3", name: "certificate", link: "/certificate" },
  { id: "4", name: "privacy & policy", link: "/privacy_policy" },
  { id: "5", name: "terms of service", link: "/terms_of_service" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-accent-500 clip-path-penta-tl-lg lg:clip-path-penta-tl-2xl overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 p-4 py-16 md:py-32 gap-10">
        <div className="w-full space-y-3 max-w-lg">
          <Image
            src={"/logo/logo-32.png"}
            alt="brand"
            width={50}
            height={50}
            quality={100}
            loading="lazy"
            blurDataURL="data:..."
            placeholder="blur"
            className="rounded-full border-2"
          />
          <p className="text-lg">
            “Architecture is a visual art and the buildings speak for
            themselves.”
          </p>
          <address>
            <b>Address:</b> 70 feet Saristabad, near the celebration point,
            opposite to Bajaj auto showroom, Patna, Bihar 800002
          </address>
          <SubscribeForm />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ul className="capitalize font-[500] flex flex-col">
            {siteMap.map((item) => (
              <li
                key={item.id}
                className="w-full hover:clip-path-penta-tr-xs duration-300 hover:bg-white hover:text-accent-500"
              >
                <Link href={`${item.link}`} className="w-full block p-2">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="capitalize space-y-2 font-[500]">
            {company.map((item) => (
              <li
                key={item.id}
                className="w-full hover:clip-path-penta-tr-xs duration-300 hover:bg-white hover:text-accent-500"
              >
                <Link href={`${item.link}`} className="w-full block p-2">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-sm text-center p-1">
        &copy; {currentYear} 24x7 Rudra Creative Home Decor & Architects. All
        rights reserved.
      </p>
    </div>
  );
}

export default Footer;
