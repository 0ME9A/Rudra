import { TestimonialFace } from "@/ts/interfaces";
import { getDateMonthYear } from "@/utils/local";
import StarRating from "../Rating/StarRating";
import Image from "next/image";

interface TestimonialCardProps {
  data: TestimonialFace;
  className?: string;
}

function TestimonialCard({ data, className }: TestimonialCardProps) {
  const { name, profession, message, rate, date, profile } = data;
  const dateTime = new Date(date);

  return (
    <div className={`relative group ${className}`}>
      <div className="p-10 w-full h-full bg-navy-900 dark:bg-white absolute top-0 left-0 clip-path-testimonial-sm md:clip-path-testimonial-md group-hover:bg-accent-500" />
      <div
        className="relative bg-white dark:bg-navy-900 group-hover:bg-accent-500 duration-300 p-4 md:p-6 flex flex-col md:flex-row items-start gap-4 md:gap-6"
        style={{
          clipPath:
            "polygon(calc(100% - 2px) 2px, calc(100% - 2px) calc(calc(100% - 3rem) - 2px), calc(40% - 2px) calc(calc(100% - 3rem) - 2px), calc(calc(40% - 3rem) - 2px) calc(100% - 2px), 2px calc(100% - 2px), 2px 2px)",
        }}
      >
        <Image
          src={`data:image/jpeg;base64,${profile}`}
          alt={name + "avatar"}
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
          {profession && (
            <p className="text-gray-500 dark:text-gray-200">{profession}</p>
          )}
          {message && <p className="py-4">{message}</p>}
          <div className="flex justify-between items-center py-3 sm:pb-10">
            <div className="flex text-xl">{<StarRating rating={rate} />}</div>
            <p className="text-gray-500 dark:text-gray-200">
              {getDateMonthYear(dateTime)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
