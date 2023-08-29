"use client";
import Image from "next/image";
import React from "react";

import chatImg from "../../assets/Chat.png";
import mockup from "../../assets/showcaseMockup.png";

const Showcase = () => {
  return (
    <div className="showcase pt-[100px] grid justify-center items-center">
      <div
        className="justify-self-center sm:w-full
    sm:grid sm:grid-flow-row sm:justify-center sm:items-center"
      >
        <h1 className="text-[#eeeeee] lg:text-6xl md:text-5xl text-4xl grid grid-flow-row p-9 mt-3 ml-3">
          <span>Travel, Earn</span>
          <span>and Live Life your</span>
          <span>way!</span>
        </h1>
        <div className="md:ml-60 md:-mt-9">
          <Image src={chatImg} width={360} height={360} />
        </div>
      </div>
      <Image
        src={mockup}
        width={400}
        height={400}
        className="sm:hidden md:block hidden"
      />
    </div>
  );
};

export default Showcase;
