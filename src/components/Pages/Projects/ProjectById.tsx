import { ProjectFace } from "@/ts/interfaces";
import GallerySlider from "./GallerySlider";
import React from "react";

function ProjectById({ project }: { project: ProjectFace }) {
  return (
    <section className="container mx-auto p-4 space-y-4 border-b border-gray-500/50">
      <GallerySlider images={project?.previewImages || []} />
      <div className="space-y-4">
        <h2 className="text-[3rem] sm:text-[4rem] leading-none font-[200]">
          {project?.title}
        </h2>
        <div className="flex justify-between text-md font-[200]">
          <p>{project?.address}</p>
          <p className="opacity-75">
            Year {new Date(project?.date || "N/A").toISOString().split("T")[0]}
          </p>
        </div>
        <div className="w-fit p-3 py-1 bg-accent-700/50 flex justify-center items-center gap-2 text-xs rounded-full text-white">
          <div className="size-2 bg-accent-500 rounded-full animate-pulse" />
          <p>{project?.status}</p>
        </div>
        <p className="text-lg leading-relaxed">{project?.desc}</p>
      </div>
    </section>
  );
}

export default ProjectById;
