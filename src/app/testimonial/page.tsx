import { TestimonialFace } from "@/ts/interfaces";
import { Metadata } from "next/types";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Lazy load TestimonialCard component
const TestimonialCard = dynamic(
  () => import("@/components/Card/TestimonialCard"),
  { suspense: true }
);

export const metadata: Metadata = {
  title: "Testimonials - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Hear from satisfied clients of 24x7 Rudra Creative Home Decor & Architects in the Patna region. Read testimonials showcasing the quality of our home decor and architectural services.",
  keywords: [
    "testimonials",
    "customer feedback",
    "reviews",
    "24x7 Rudra Creative Home Decor & Architects",
    "Patna testimonials",
    "happy clients",
    "home decor reviews",
    "architectural service feedback",
    "Patna region",
  ],
};

export default async function Page() {
  let testimonials: TestimonialFace[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonial`, { cache: "no-store" });

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
      <div />
    </section>
  );
}
