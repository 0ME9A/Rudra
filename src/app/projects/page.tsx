import { PaginationFace, ProjectFace } from "@/ts/interfaces";
import React, { Suspense } from "react";
import { Metadata } from "next/types";
import Pagination from "@/components/Pages/Projects/Pagination";
import Header from "@/components/Pages/Projects/Header";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

// Lazy load projectCard component
const ProjectCard = dynamic(() => import("@/components/Card/ProjectCard"), {
  suspense: true,
});

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: "Our Projects - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Discover our portfolio of stunning projects at 24x7 Rudra Creative Home Decor & Architects. Explore our innovative designs and home decor solutions tailored to clients in the Patna region.",
  keywords: [
    "projects",
    "portfolio",
    "home decor projects",
    "architectural designs",
    "interior design projects",
    "Patna projects",
    "24x7 Rudra Creative Home Decor & Architects",
    "renovation",
    "design inspiration",
  ],
};

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  let projects: ProjectFace[] = [];
  let pagination: PaginationFace = {
    totalProjects: 0,
    totalPages: 0,
    currentPage: 0,
    limit: 0,
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects?page=${
        searchParams?.page || 1
      }`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch Projects.");

    const apiResponse = await res.json();
    projects = apiResponse.data;
    pagination = apiResponse.pagination;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return (
      <Error_v1
        message={
          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            Failed to fetch <br />
            <em className="font-[600]">Projects.</em>
          </p>
        }
      />
    );
  }

  return (
    <div className="space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <Header projects={pagination.totalProjects} />
        <Suspense fallback={<Loading />}>
          {projects.map((item) => (
            <ProjectCard key={item._id} data={item} />
          ))}
        </Suspense>
      </section>
      {pagination.totalPages > 1 && (
        <Pagination
          totalPages={pagination.totalPages}
          currentPage={pagination.currentPage}
        />
      )}
      <div />
    </div>
  );
}
