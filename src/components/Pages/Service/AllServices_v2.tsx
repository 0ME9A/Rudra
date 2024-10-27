// AllServices.tsx
import { Service_v2Face, ServiceDataProps } from "@/ts/interfaces";
import Services_v2 from "../Home/Services_v2";
import Services from "../Home/Services";
import React from "react";

interface ResFace {
  services: ServiceDataProps[];
  moreServices: Service_v2Face[];
}

function AllServices_v2({ data }: { data: ResFace }) {
  return (
    <div className="container mx-auto sm:p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <Services_v2 data={data.moreServices || []} />
      <Services data={data.services || []} />
    </div>
  );
}

export default AllServices_v2;
