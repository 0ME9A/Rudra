import { TestimonialCardProps } from "@/ts/interfaces";
import TestimonialCard from "@/components/Card/TestimonialCard";
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
  {
    id: "6",
    name: "Emily Robertson",
    occupation: "Homeowner",
    review: "",
    date: "March, 2024",
    rating: 2.9,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "7",
    name: "James Thornton",
    occupation: "CEO, Thornton Construction",
    review:
      "Working with this team on our commercial building was a fantastic experience. Their architectural design brought a modern, sleek look to our workspace.",
    date: "April, 2024",
    rating: 5.0,
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "8",
    name: "Sophia Martinez",
    occupation: "Interior Designer",
    review:
      "Their architectural insights were invaluable to our project. The final result is a perfect blend of functionality and aesthetic appeal.",
    date: "January, 2024",
    rating: 4.7,
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    name: "Michael Lee",
    occupation: "Real Estate Developer",
    review:
      "Their innovative approach to interior design transformed our properties, making them more appealing to high-end buyers.",
    date: "February, 2024",
    rating: 4.9,
    src: "https://images.unsplash.com/photo-1484611941511-3628849e90f7?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Index() {
  const lt = testimonialsData.at(-1);

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {testimonialsData.map((item) => (
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
    </div>
  );
}

export default Index;
