"use client";

import React from "react";
import Intro from "./Intro";
import Showcase from "./Showcase";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <div className="w-full h-full bg-foreground">
      <h3 className="text-2xl font-medium p-5 md:px-20 md:py-10 text-gray-200">Ridwan's</h3>
      <div className="flex justify-center items-center px-5 md:px-20 pb-10">
        <Intro />
      </div>
      <div>
        <Showcase />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
