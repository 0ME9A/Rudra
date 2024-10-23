"use client";
import { TestimonialFace } from "@/ts/interfaces";
import { getDateMonthYear } from "@/utils/local";
import { useState, useEffect } from "react";
import TestimonialCard from "@/components/Card/TestimonialCard";
import StarRating from "@/components/Rating/StarRating";
import Loading from "@/components/Loading";
import Link from "next/link";
import Error_v2 from "@/components/Error_v2";

function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState<TestimonialFace[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonial?limit=4`);
        if (!res.ok) throw new Error("Failed to fetch testimonials.");

        const data = await res.json();
        setTestimonialsData(data.data); // Assuming `data.data` contains the array of testimonials
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <Error_v2
        className="text-center"
        message="Failed to load testimonials. 😞"
      />
    );

  const lt: TestimonialFace = testimonialsData[3];
  const dateTime = new Date(lt?.date);

  return (
    <section className="container mx-auto p-4">
      <div className="space-y-6">
        <h2 className="text-2xl text-gray-500 uppercase">Testimonial</h2>
        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Our Clients{"'"} Success <br /> is Our{" "}
          <em className="font-[600]">Success</em>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 py-8 lg:py-16">
        <div className="space-y-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <TestimonialCard key={item._id} data={item} />
          ))}

          <Link
            href={"/testimonial"}
            className="float-right text-accent-500 underline hidden lg:block"
          >
            See More
          </Link>
        </div>
        <div className="bg-accent-500 relative overflow-hidden p-4 lg:p-12 flex flex-col justify-between clip-path-penta-br-md">
          <div>
            <h3 className="text-xl md:text-2xl uppercase font-[500]">
              {lt?.name}
            </h3>
            <p className="text-gray-200">{lt?.profession}</p>
          </div>
          <blockquote
            cite=""
            className="text-2xl md:text-3xl lg:text-5xl py-32"
          >
            {`"`}
            {lt?.message}
            {`"`}
          </blockquote>
          <span className="h-[10%]" />
          <div className="flex items-center justify-between">
            <StarRating rating={lt?.rate || 5} />
            <p>{getDateMonthYear(dateTime)}</p>
            <p className="font-[600]">RD</p>
          </div>
        </div>
      </div>
      <div className="border bg-white flex items-end justify-end py-16 px-6 relative lg:hidden clip-path-penta-tr-md">
        <Link href={"/testimonial"} className="text-accent-500 underline">
          See More
        </Link>
      </div>
    </section>
  );
}

export default Testimonials;
