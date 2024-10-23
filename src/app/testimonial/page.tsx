import { TestimonialFace } from "@/ts/interfaces";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Lazy load TestimonialCard component
const TestimonialCard = dynamic(
  () => import("@/components/Card/TestimonialCard"),
  { suspense: true }
);

export default async function Page() {
  let testimonials: TestimonialFace[] = [];

  try {
    const res = await fetch(
      `/api/testimonial`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch testimonials.");

    const apiResponse = await res.json();
    testimonials = apiResponse.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return (
      <Error_v1
        message={
          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            Failed to fetch <br />
            <em className="font-[600]">Testimonials.</em>
          </p>
        }
      />
    );
  }

  return (
    <section className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <div className="space-y-6">
        <h2 className="text-2xl text-gray-500 uppercase">Testimonials</h2>
        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Our Clients{"'"} Success <br /> is Our{" "}
          <em className="font-[600]">Success</em>
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <Suspense fallback={<Loading />}>
          {testimonials.map((item) => (
            <TestimonialCard key={item._id} data={item} />
          ))}
        </Suspense>
      </div>
      <div/>
    </section>
  );
}
