import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <div className="space-y-6 text-center py-32">
        <h2 className="text-2xl text-gray-500 uppercase">Not found!</h2>
        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Could not find requested <br />
          <em className="font-[600]">resource</em>
        </p>
        <p className="text-accent-500">
          Return{" "}
          <Link href="/" className="underline hover:text-white duration-300">
            Home
          </Link>
        </p>
      </div>
    </section>
  );
}
