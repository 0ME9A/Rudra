import { IoCallSharp } from "react-icons/io5";
import Link from "next/link";

function CallNow() {
  return (
    <div className="fixed z-10 right-2 md:right-4 bottom-2 md:bottom-4 space-y-2">
      <Link
        href="tel:+919304982636"
        title="Call Now"
        className="flex items-center justify-center p-1 bg-accent-500 rounded-full shadow-lg"
      >
        <span className="bg-white text-accent-500 text-2xl p-2 rounded-full relative shadow-xl animate-bounce">
          <IoCallSharp />
        </span>
        <strong className="p-2 hidden md:block">+91 9304982636</strong>
      </Link>
    </div>
  );
}

export default CallNow;
