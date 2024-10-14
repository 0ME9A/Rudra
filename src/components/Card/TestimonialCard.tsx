import { TestimonialCardProps } from "@/ts/interfaces";
import StarRating from "../Rating/StarRating";
import Image from "next/image";

function TestimonialCard({
  name,
  occupation,
  review,
  rating,
  date,
  src,
  className,
}: TestimonialCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="p-10 w-full h-full bg-white absolute top-0 left-0 clip-path-testimonial-sm md:clip-path-testimonial-md group-hover:bg-accent-500" />
      <div
        className="relative bg-navy-900 group-hover:bg-accent-500 duration-300 p-4 md:p-6 flex flex-col md:flex-row items-start gap-4 md:gap-6"
        style={{
          clipPath:
            "polygon(calc(100% - 2px) 2px, calc(100% - 2px) calc(calc(100% - 3rem) - 2px), calc(40% - 2px) calc(calc(100% - 3rem) - 2px), calc(calc(40% - 3rem) - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 2px)",
        }}
      >
        <Image
          src={src}
          alt={name}
          width={300}
          height={300}
          quality={100}
          blurDataURL="data:..."
          placeholder="blur"
          className="w-16 sm:w-24 md:w-32 lg:w-40 aspect-square object-cover rounded-full"
        />
        <div className="w-full">
          <h3 className="text-xl md:text-2xl uppercase font-[500] py-1">
            {name}
          </h3>
          {occupation && <p className="text-gray-200">{occupation}</p>}
          {review && <p className="py-4">{review}</p>}
          <div className="flex justify-between items-center py-3 sm:pb-10">
            <div className="flex text-xl">{<StarRating rating={rating} />}</div>
            <p className="text-gray-200">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
