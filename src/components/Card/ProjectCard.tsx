import { ProjectCardProps } from "@/ts/interfaces";
import Image from "next/image";

function ProjectCard({
  img: {
    src,
    alt,
    size: { w, h },
  },
  title,
  desc,
  date,
  className,
}: ProjectCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        quality={100}
        blurDataURL="data:..."
        placeholder="blur"
        className="w-full h-full object-cover aspect-square clip-path-penta-tl-sm md:clip-path-penta-tl-md"
      />
      <span className="w-full h-full absolute top-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
      <div className="h-16"></div>
      <div className="w-full absolute bottom-0 p-6">
        <h2 className="text-2xl uppercase font-[500]">{title}</h2>
        <div className="flex justify-between text-md font-[200]">
          <p>{desc}</p>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
