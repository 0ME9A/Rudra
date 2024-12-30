"use client";
import { CertificateFace } from "@/ts/interfaces";
import { MdDownload } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Image from "next/image";
import React from "react";

interface certFace {
  data: CertificateFace;
  className?: string;
}

function CertificateCard({ data, className }: certFace) {
  const { _id, title, name, certSrc, desc, certId } = data;
  const fullUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/certificate/${certId}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert("Certificate link copied to clipboard!"); // Replace with a toast for better UX
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Failed to copy the certificate link. Please try again.");
    }
  };

  const handleDownloadCertificate = (imageData: string) => {
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "certificate.jpg"; // Set the name of the downloaded file
    link.click();
    alert("Certificate download done!"); // Replace with a toast for better UX
  };

  return (
    <figure className={className}>
      <Image
        src={`data:image/jpeg;base64,${certSrc}`}
        alt={title}
        width={500}
        height={500}
        quality={100}
        blurDataURL="data:..."
        placeholder="blur"
        className="w-full h-auto object-cover"
      />{" "}
      <div className="flex items-start mt-6">
        <header className="space-y-2">
          <h2 className="text-3xl uppercase">{title}</h2>
          <p>
            Certificate id: <span>{certId}</span>
          </p>
          <figcaption>{desc}</figcaption>
        </header>
        <div className="flex gap-2">
          <PrimaryBtn
            title="Copy link"
            className="!p-3"
            onClick={handleCopyLink}
          >
            <IoMdCopy />
          </PrimaryBtn>
          <PrimaryBtn
            title="Download certificate"
            className="!p-3"
            onClick={() =>
              handleDownloadCertificate(`data:image/jpeg;base64,${certSrc}`)
            }
          >
            <MdDownload />
          </PrimaryBtn>
        </div>
      </div>
    </figure>
  );
}

export default CertificateCard;
