import Home from "@/components/Pages/Home/Home";

export default function page() {
  return (
    <div className="relative overflow-auto snap-y overflow-x-hidden">
      <div className="flex flex-col space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
        <Home />
      </div>
    </div>
  );
}
