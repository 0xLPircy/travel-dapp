"use client";
import Image from "next/image";
import React from "react";
import chatImg from "../../assets/chat.png";
import mockup from "../../assets/showcaseMockup.png";

const Showcase = () => {
  return (
    <div className="showcase pt-[100px]">
      <div className="">
        <h1 className="text-[#eeeeee] text-6xl grid grid-flow-row">
          <span>Travel, Earn</span>
          <span>and Live Life your way!</span>
        </h1>
        <Image src={chatImg} width={300} height={300} />
      </div>
      <Image src={mockup} width={400} height={400} />
    </div>
  );
};

export default Showcase;
