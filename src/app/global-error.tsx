"use client";

import PrimaryBtn from "@/components/Buttons/PrimaryBtn";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <section className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
          <div className="space-y-6 text-center py-32">
            <h2 className="text-2xl text-gray-500 uppercase">Oops!</h2>
            <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
              Something Went <br />
              <em className="font-[600]">Wrong!</em>
            </p>
            <PrimaryBtn onClick={() => reset()}>Try again</PrimaryBtn>
          </div>
        </section>
      </body>
    </html>
  );
}
