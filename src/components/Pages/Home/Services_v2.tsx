"use client";
import { Service_v2Face } from "@/ts/interfaces";
import ServiceCard_v2 from "@/components/Card/ServiceCard_v2";

const Services_v2 = ({ data }: { data: Service_v2Face[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((card, index) => (
        <ServiceCard_v2 key={index} data={card} />
      ))}
    </div>
  );
};

export default Services_v2;
