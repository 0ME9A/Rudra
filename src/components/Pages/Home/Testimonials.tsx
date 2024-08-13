import { TestimonialCardProps } from "@/ts/interfaces";
import TestimonialCard from "@/components/Card/TestimonialCard";
import StarRating from "@/components/Rating/StarRating";
import Link from "next/link";
import React from "react";

export const testimonialsData: TestimonialCardProps[] = [
  {
    id: "1",
    name: "Emily Robertson",
    occupation: "Homeowner",
    review: "",
    date: "March, 2024",
    rating: 2.9,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "2",
    name: "James Thornton",
    occupation: "CEO, Thornton Construction",
    review:
      "Working with this team on our commercial building was a fantastic experience. Their architectural design brought a modern, sleek look to our workspace.",
    date: "April, 2024",
    rating: 5.0,
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    occupation: "Interior Designer",
    review:
      "Their architectural insights were invaluable to our project. The final result is a perfect blend of functionality and aesthetic appeal.",
    date: "January, 2024",
    rating: 4.7,
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Michael Lee",
    occupation: "Real Estate Developer",
    review:
      "Their innovative approach to interior design transformed our properties, making them more appealing to high-end buyers.",
    date: "February, 2024",
    rating: 4.9,
    src: "https://images.unsplash.com/photo-1484611941511-3628849e90f7?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Olivia Parker",
    occupation: "Retail Store Owner",
    review:
      "The architectural redesign of our store has significantly improved customer flow and enhanced the overall shopping experience.",
    date: "May, 2024",
    rating: 4.6,
    src: "https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Testimonials() {
  const lt = testimonialsData.at(-1);

  return (
    <section className="container mx-auto p-4">
      <div className="space-y-6">
        <h2 className="text-2xl text-gray-500 uppercase">who we are</h2>
        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Our Clients{"'"} Success <br /> is Our{" "}
          <em className="font-[600]">Success</em>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 py-8 lg:py-16">
        <div className="space-y-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              occupation={item.occupation}
              review={item.review}
              rating={item.rating}
              date={item.date}
              src={item.src}
            />
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
            <p className="text-gray-200">{lt?.occupation}</p>
          </div>
          <blockquote
            cite=""
            className="text-2xl md:text-3xl lg:text-5xl py-32"
          >
            {`"`}
            {lt?.review}
            {`"`}
          </blockquote>
          <span className="h-[10%]" />
          <div className="flex items-center justify-between">
            <StarRating rating={lt?.rating || 5} />
            <p>{lt?.date}</p>
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
