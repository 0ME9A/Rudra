import { ProjectCardProps_v2 } from "@/ts/interfaces";
import ProjectCard from "@/components/Card/ProjectCard";
import Header from "@/components/Pages/Projects/Header";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

// Lazy load Index component
const Index = dynamic(() => import("@/components/Pages/Projects/Index"), {
  suspense: true,
});

export default async function Page() {
  let projects: ProjectCardProps_v2[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch Projects.");

    const apiResponse = await res.json();
    projects = apiResponse.data;
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
        <Header projects={projects.length} />
        {projects.length === 0 ? (
          <Loading />
        ) : (
          projects.map((item) => <ProjectCard key={item._id} data={item} />)
        )}
      </section>
      <div />
    </div>
  );
}
