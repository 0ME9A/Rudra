import { contact } from "@/data/contact";
import Link from "next/link";
import Image from "next/image";

function ChatNow() {
  return (
    <div className="fixed z-10 left-2 md:left-4 bottom-8 md:bottom-4 space-y-2">
      <Link
        href={`https://wa.me/91${contact.primaryPhone}`} // Use WhatsApp API link
        title="Chat on WhatsApp"
        className="flex items-center justify-center p-1 bg-accent-500 rounded-full shadow-lg"
      >
        <Image
          src={"/img/whatsapp.png"}
          alt={"Whatsapp"}
          width={"48"}
          height={"48"}
          quality={100}
          blurDataURL="data:..."
          placeholder="blur"
          className="animate-bounce"
        />
        <strong className="p-2 hidden md:block">Chat on WhatsApp</strong>
      </Link>
    </div>
  );
}

export default ChatNow;
