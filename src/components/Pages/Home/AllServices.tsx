"use client";
import { Service_v2Face, ServiceDataProps } from "@/ts/interfaces";
import React, { useEffect, useState } from "react";
import Error_v2 from "@/components/Error_v2";
import Loading from "@/components/Loading";
import Services_v2 from "./Services_v2";
import Services from "./Services";

interface resFace {
  success: boolean;
  data: {
    services: ServiceDataProps[];
    moreServices: Service_v2Face[];
  };
}

function AllServices() {
  const [services, setServices] = useState<resFace | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch("/api/services"); // Adjust the endpoint as needed
        if (!request.ok) throw new Error("Failed to fetch cards data.");

        const response = await request.json();
        setServices(response);
      } catch (error) {
        setError("Error loading cards.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <Error_v2 className="text-center" message="Failed to load projects. 😞" />
    );

  return (
    <div className="container mx-auto sm:p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <Services_v2 data={services?.data.moreServices || []} />
      <Services data={services?.data.services || []} />
    </div>
  );
}

export default AllServices;
