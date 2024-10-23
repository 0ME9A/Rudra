"use client";
import Error_v2 from "@/components/Error_v2";
import React, { useEffect, useState } from "react";

function Hero_04() {
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Calculate dynamic years of expertise
  const companyFoundingYear = 2017; // You can adjust this to the actual founding year
  const currentYear = new Date().getFullYear();
  const yearsOfExpertise = currentYear - companyFoundingYear;

  useEffect(() => {
    // Fetch the total number of projects
    const fetchTotalProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects/all`
        );
        if (!res.ok) throw new Error("Failed to fetch total projects.");

        const data = await res.json();
        setTotalProjects(data.total); // Assuming `data.total` contains the count
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching total projects:", error);
        setError(true);
        setLoading(false); // Stop loading on error as well
      }
    };

    fetchTotalProjects();
  }, []);

  if (loading)
    return (
      <div className="h-full flex flex-col">
        <div className="grid lg:grid-cols-2 items-start h-fit p-10 md:p-16 animate-pulse">
          <div className="space-y-2 *:rounded-full *:p-2 *:bg-accent-500/20 *:w-[80%]">
            <div />
            <div className="!w-1/2" />
          </div>
          <div className="space-y-2 *:rounded-full *:p-2 *:bg-accent-500/20 ">
            <div />
            <div className="w-1/3" />
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <Error_v2 className="md:p-10" message="Failed to load resources." />
    );

  return (
    <div className="h-full flex flex-col">
      <div className="grid lg:grid-cols-2 items-start h-fit p-10 md:p-16">
        <div className="flex items-center gap-4">
          <p className="capitalize text-[1rem] sm:text-[2rem] xl:text-[3rem] leading-none font-[600]">
            {totalProjects}
            <span className="text-accent-500">+</span>
          </p>
          <p className="text-gray-500 text-xl leading-none">
            Successful <br /> project
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="capitalize text-[1rem] sm:text-[2rem] xl:text-[3rem] leading-none font-[600]">
            {yearsOfExpertise}
            <span className="text-accent-500">+</span>
          </p>
          <p className="text-gray-500 text-xl leading-none">
            Years of <br /> Expertise
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero_04;
