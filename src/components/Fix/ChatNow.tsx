import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

function ChatNow() {
  return (
    <div className="fixed z-10 left-2 md:left-4 bottom-8 md:bottom-4 space-y-2">
      <Link
        href="https://wa.me/917903021397" // Use WhatsApp API link
        title="Chat on WhatsApp"
        className="flex items-center justify-center p-1 bg-accent-500 rounded-full shadow-lg"
      >
        <span className="bg-white text-accent-500 text-2xl p-2 rounded-full relative shadow-xl animate-bounce">
          <FaWhatsapp />
        </span>
        <strong className="p-2 hidden md:block">Chat on WhatsApp</strong>
      </Link>
    </div>
  );
}

export default ChatNow;
