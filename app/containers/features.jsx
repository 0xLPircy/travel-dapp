import Image from "next/image";
import React from "react";
import f1 from "../../assets/features/feat1.png";

const Features = () => {
  return (
    <>
      <div className="grid grid-flow-row justify-center items-center text-white">
        <h1 className="justify-self-center">Top Features</h1>
        <h5 className="justify-self-center">Explore the Wildness of Nature</h5>
        <div className="justify-self-center grid grid-flow-col grid-cols-4">
          <div className="justify-self-center">
            <div className="justify-self-center grid grid-flow-row">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700">
                  NFT REWARDS
                </h3>
                <p className="justify-self-center">
                  Earn exclusive and collectible NFTs for every completed task
                  during your trips.
                </p>
              </div>
            </div>
            <div className="justify-self-center grid grid-flow-row">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700">
                  NFT REWARDS
                </h3>
                <p className="justify-self-center">
                  Earn exclusive and collectible NFTs for every completed task
                  during your trips.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="justify-self-center grid grid-flow-row">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700">
                  NFT REWARDS
                </h3>
                <p className="justify-self-center">
                  Earn exclusive and collectible NFTs for every completed task
                  during your trips.
                </p>
              </div>
            </div>
            <div className="justify-self-center grid grid-flow-row">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700">
                  NFT REWARDS
                </h3>
                <p className="justify-self-center">
                  Earn exclusive and collectible NFTs for every completed task
                  during your trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
