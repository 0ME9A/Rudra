import { Metadata, ResolvingMetadata } from "next/types";
import { GalleryFace } from "@/ts/interfaces";
import { contact } from "@/data/contact";
import React, { Suspense } from "react";
import GalleryById from "@/components/Pages/Gallery/GalleryById";
import PrimaryLink from "@/components/Links/PrimaryLink";
import GalleryCard from "@/components/Card/GalleryCard";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Metadata generation
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  try {
    const product: GalleryFace = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery/${id}`
    ).then((res) => res.json());

    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: product?.title || "Gallery",
      description: product?.desc || "Explore our project details.",
      openGraph: {
        images: product?.previewImages?.length
          ? [...product.previewImages]
          : previousImages,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Project not found",
      description: "Could not load project details.",
    };
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const [galleryRes, galleriesRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery/${params.id}`, {
        cache: "no-store",
      }),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery?limit=4`, {
        cache: "no-store",
      }),
    ]);

    if (!galleryRes.ok || !galleriesRes.ok)
      throw new Error("Failed to fetch projects.");

    const gallery: GalleryFace = await galleryRes.json();
    const { data: projects }: { data: GalleryFace[] } =
      await galleriesRes.json();

    return (
      <div className="space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
        <Suspense fallback={<Loading />}>
          <GalleryById gallery={gallery} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div className="space-y-2 flex flex-col justify-between">
              <h3 className="text-[3rem] sm:text-[4rem] leading-none text-black dark:text-white font-[200]">
                More Inspirations from Our
                <em className="font-[600] text-accent-500"> Projects</em> <br />
              </h3>
              <p className="text-2xl !leading-normal font-thin">
                24x7 Rudra Creative Home <br /> Decor & Architects
              </p>

              <div className="flex gap-4 pt-2">
                <PrimaryLink
                  href="/contact"
                  className="w-full !normal-case sm:w-fit"
                >
                  Contact us
                </PrimaryLink>
                <PrimaryLink
                  href={`tel:+91${contact.primaryPhone}`}
                  className="w-full sm:w-fit !normal-case"
                  transparent={true}
                >
                  Book a Call
                </PrimaryLink>
              </div>
            </div>
            {projects.map((item) => (
              <GalleryCard key={item._id} data={item} />
            ))}
          </section>
        </Suspense>
        <div />
      </div>
    );
  } catch (error) {
    console.error("Error rendering project page:", error);
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
}
