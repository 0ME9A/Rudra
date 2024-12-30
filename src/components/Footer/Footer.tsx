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
  return (
    <div className="w-full bg-accent-500 clip-path-penta-tl-lg lg:clip-path-penta-tl-2xl overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 p-4 py-32 gap-10">
        <div className="w-full space-y-10">
          <div className="p-2 bg-white w-fit text-accent-500 text-3xl rounded-lg font-[500]">
            <p>RD</p>
          </div>
          <p className="text-lg max-w-sm">
            “Architecture is a visual art and the buildings speak for
            themselves.”
          </p>
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
    </div>
  );
}

export default Footer;
