import React from "react";
import TypingIntro from "./TypingIntro";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-20 h-full w-full relative overflow-hidden">
      <div className="flex items-center justify-start order-2 md:order-1 min-w-full">
        <TypingIntro />
      </div>
      <div className="flex items-center justify-end order-1 md:order-2 min-w-full relative">
        <div className="relative w-full max-w-[432px] aspect-[3/4] sm:max-w-md opacity-80">
          <Image
            src="/assets/images/ridwan.png"
            alt="Ridwan"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-white text-7xl font-bold absolute bottom-0 right-0 text-right">Ridwan Aditya Saputra</h2>
      </div>
    </div>
  );
};

export default Intro;
