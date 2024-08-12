import Image from "next/image";
import React from "react";

export interface ProjectCardProps {
  title: string;
  desc: string;
  date?: string;
  className?: string;
  img: {
    src: string;
    alt: string;
    size: { w: number; h: number };
  };
}

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
      <span
        style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
        className="bg-navy-900 block w-[10%] aspect-square absolute -top-[.2rem] -left-[.2rem]"
      />
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        quality={100}
        blurDataURL="data:..."
        placeholder="blur"
        className="w-full h-full object-cover aspect-square"
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
