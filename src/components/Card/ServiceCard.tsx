import { ServiceDataProps } from "@/ts/interfaces";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

function ServiceCard({
  id,
  title,
  desc,
  url,
  img: {
    src,
    alt,
    size: { w, h },
  },
}: ServiceDataProps) {
  return (
    <div className="css-sc-parent group border-b-2 hover:border-b-transparent relative">
      <div className="css-sc-child p-4 flex items-center group-hover:items-start justify-between group-hover:bg-accent-500 duration-300 group-hover:clip-path-testimonial-sm md:group-hover:clip-path-testimonial-md">
        <div className="flex items-start gap-4 md:gap-6">
          <span className="text-sm md:text-2xl h-[2.5rem] md:h-[5rem] flex items-center">
            {id}
          </span>
          <div className="">
            <h3 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] font-[200]">
              {title}
            </h3>

            <div className="duration-300 overflow-hidden group-hover:pb-28 h-0">
              <p className="sm:max-w-screen-sm text-sm md:text-base relative -top-96 group-hover:top-0 duration-300 line-clamp-2">
                {desc}
              </p>
            </div>
          </div>
        </div>
        <Link
          href={url}
          title={"Learn more"}
          className="rounded-full border-2 border-white text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] p-3 flex items-center justify-center duration-300 group-hover:-rotate-45 hover:bg-white hover:text-accent-500"
        >
          <GoArrowRight />
        </Link>
      </div>
      <div className="hidden md:block w-80 bg-white absolute -top-1/2 right-1/4 scale-0 group-hover:scale-100 rotate-0 group-hover:-rotate-6 opacity-0 group-hover:opacity-100 duration-300 clip-path-penta-tl-sm">
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          quality={100}
          priority={false}
          blurDataURL="data:..."
          placeholder="blur"
          className="w-full h-full object-cover aspect-square"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
