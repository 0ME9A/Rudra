import { GalleryFace, ProjectFace } from "@/ts/interfaces";
import GallerySlider from "../Projects/GallerySlider";
import React from "react";

function GalleryById({ gallery }: { gallery: GalleryFace }) {
  return (
    <section className="container mx-auto p-4 space-y-4 border-b border-gray-500/50">
      <GallerySlider images={gallery?.previewImages || []} />
      <div className="space-y-4">
        <h2 className="text-[3rem] sm:text-[4rem] leading-none font-[200]">
          {gallery?.title || "N/A"}
        </h2>
        <p className="text-lg leading-relaxed">{gallery?.desc || "N/A"}</p>
      </div>
    </section>
  );
}

export default GalleryById;
