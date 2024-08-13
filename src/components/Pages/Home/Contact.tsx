import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <section className="container mx-auto p-4 penta-tl-xs">
      <div className="grid grid-cols-3 items-center">
        <p className="text-2xl col-span-1">
          Build Future with <br /> Empowering vision
        </p>
        <div className="col-span-2 space-y-6">
          <h2 className="text-2xl text-gray-500 uppercase">
            BOOK YOU <br /> CALL
          </h2>
          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            Transforming spaces with Vision{" "}
            <em className="font-[600]">Architectural Solutions</em>
          </p>
        </div>
      </div>
      <div className="w-full relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1000}
          height={1000}
          alt=""
          quality={100}
          blurDataURL="data:..."
          placeholder="blur"
          className="w-full h-full bg-accent-500 object-cover absolute"
          style={{
            clipPath:
              "polygon(0 5rem, 70% 5rem, calc(70% + 5rem) 0, 100% 0%, 100% calc(100% - 5rem), calc(100% - 5rem) 100%, 0 100%)",
          }}
        />
        {/* <div className="h-[5rem] border-2 border-green-500">hi</div> */}
        <div className="w-full h-full relative pt-[7rem] p-[2rem]">
          <div className="bg-accent-500 max-w-sm w-full h-96 p-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
