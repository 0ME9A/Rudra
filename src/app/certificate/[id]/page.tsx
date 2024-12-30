import { Metadata, ResolvingMetadata } from "next/types";
import { CertificateFace } from "@/ts/interfaces";
import React, { Suspense } from "react";
import CertificateCard from "@/components/Card/CertificateCard";
import Error_v1 from "@/components/Error_v1";
import Loading from "@/components/Loading";

type Props = {
  params: { id: string };
};

// Metadata generation
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  try {
    const certificate: CertificateFace = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/certificate/${id}`
    ).then((res) => res.json());

    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: certificate?.name || "Certificate",
      description: certificate?.desc || "Explore certificate details.",
      openGraph: {
        images: certificate?.certSrc ? [certificate.certSrc] : previousImages,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Certificate not found",
      description: "Could not load certificate details.",
    };
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const certificateRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/certificate/${params.id}`,
      {
        cache: "no-store",
      }
    );

    if (!certificateRes.ok) {
      throw new Error("Failed to fetch certificate.");
    }

    const certificate: CertificateFace = await certificateRes.json();

    return (
      <div className="container p-4 lg:max-w-screen-lg mx-auto space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
        <Suspense fallback={<Loading />}>
          <CertificateCard data={certificate} />
        </Suspense>
        <div />
      </div>
    );
  } catch (error) {
    console.error("Error rendering certificate page:", error);
    return (
      <Error_v1
        message={
          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            Failed to fetch <br />
            <em className="font-[600]">Certificate.</em>
          </p>
        }
      />
    );
  }
}
