import Image from "next/image";
import React from "react";
import sj from "@/assets/nfts/surferJunkie.png";

const Nftcard = () => {
  return (
    <div className="nftBorder p-[1px] w-48 rounded-md my-3 mx-3">
      <div className="bg-[#121212] rounded-md p-4 grid grid-flow-row justify-center items-center">
        <Image
          height={210}
          width={210}
          src={sj}
          className="justify-self-center pb-1"
        />
        <h2 className="text-xl italic text-[#eeeeee]">Surfer Junkie</h2>
        <p className="text-[#a9a9a9] text-xs italic">Trip name here</p>
        <div>{/* eth starts */}</div>
      </div>
    </div>
  );
};

export default Nftcard;
