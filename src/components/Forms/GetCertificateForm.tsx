"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

function GetCertificateForm() {
  const router = useRouter();
  const [certificateId, setCertificateId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate the certificate ID
    if (!certificateId.trim()) {
      setError("Certificate ID is required.");
      return;
    }

    // Redirect to the certificate page
    router.push(`/certificate/${certificateId}`);
  };

  return (
    <form className="max-w-screen-sm mx-auto space-y-2" onSubmit={handleSubmit}>
      <label htmlFor="certificateId" className="block text-xl pb-4">
        Enter Certificate ID
      </label>
      <input
        type="text"
        id="certificateId"
        name="certificateId"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        className="p-3 rounded-full text-black w-full"
        required
      />

      <PrimaryBtn type="submit" title="see certificate" className="w-full">
        See Certificate
      </PrimaryBtn>
    </form>
  );
}

export default GetCertificateForm;
