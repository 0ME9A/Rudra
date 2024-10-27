import { Service_v2Face } from "@/ts/interfaces";
import React from "react";

interface Props {
  data: Service_v2Face;
  className?: string;
}

const ServiceCard_v2: React.FC<Props> = ({ data, className }) => (
  <div className="p-4 shadow-sm bg-white dark:bg-black relative clip-path-penta-tl-lg">
    <div className="size-1/2 absolute top-4 right-4 bg-accent-500/30 clip-path-penta-tl-lg" />
    <div className="space-y-4">
      <h2 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
        {data.title}
      </h2>
      <p className="text-base md:text-xl dark:text-white duration-300 font-light">
        {data.description}
      </p>
      <p className="font-semibold text-gray-500">
        Category: {data.category}
      </p>
      <ul className="flex gap-2">
        {data.type.map((item) => (
          <li key={item} className="w-fit p-1 px-3 bg-accent-500 rounded-full">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ServiceCard_v2;
