import { GalleryFace, ProjectFace } from "@/ts/interfaces";
import Image from "next/image";
import Link from "next/link";

interface cardFace {
  data: GalleryFace;
  className?: string;
}

function ProjectCard({ data, className }: cardFace) {
  const { _id, title, previewImages, desc } = data;

  return (
    <Link
      href={`/gallery/${_id}`}
      className={`relative overflow-hidden ${className}`}
    >
      <figure className="size-full">
        <Image
          src={`data:image/jpeg;base64,${previewImages[0]}`}
          alt={title}
          width={500}
          height={500}
          quality={100}
          blurDataURL="data:..."
          placeholder="blur"
          className="w-full h-full object-cover aspect-square clip-path-penta-tl-sm md:clip-path-penta-tl-md"
        />
        <span className="w-full h-full absolute top-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
        <div className="h-16"></div>
        <figcaption>
          <div className="w-full absolute bottom-0 p-6 text-white">
            <h2 className="text-2xl uppercase font-[500]">{title}</h2>
            <p className="pt-2">{desc}</p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ProjectCard;
