import Image from "next/image";
import React from "react";
import f1 from "../../assets/features/feat1.png";

const Features = () => {
  return (
    <>
      <div className="grid grid-flow-row justify-center items-center text-white">
        <h1 className="justify-self-center text-4xl mt-12">Top Features</h1>
        <h5 className="justify-self-center text-2xl mb-6">
          Explore the Wildness of Nature
        </h5>
        {/* main cards areas */}
        <div className="justify-self-center grid grid-flow-col grid-cols-4">
          {/* columns */}
          <div className="justify-self-center -mt-24">
            {/* cards 1&2*/}
            <div className="justify-self-center grid grid-flow-row mb-9">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700 italic">
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
                <h3 className="justify-self-center text-cyan-700 italic">
                  PRESET PROGRAMS{" "}
                </h3>
                <p className="justify-self-center">
                  Choose from a selection of carefully crafted trips, tailored
                  to suit your preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-center mt-0">
            {/* cards 3&4 */}
            <div className="justify-self-center grid grid-flow-row mb-9">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700 italic">
                  DIVERSE TASKS
                </h3>
                <p className="justify-self-center">
                  Engage in a variety of tasks, from exploring hidden gems to
                  experiencing local traditions.
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
                <h3 className="justify-self-center text-cyan-700 italic">
                  TWO TRAVEL PACES
                </h3>
                <p className="justify-self-center">
                  Opt for a relaxed journey or an adventure-packed expedition,
                  depending on your style.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            {/* cards 5&6*/}
            <div className="justify-self-center grid grid-flow-row mb-9">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700 italic">
                  GAMIFIED EXPERIENCE
                </h3>
                <p className="justify-self-center">
                  Climb the leaderboards, achieve milestones, and unlock special
                  perks.
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
                <h3 className="justify-self-center text-cyan-700 italic">
                  SEEMLESS SIGN-UP
                </h3>
                <p className="justify-self-center">
                  Register effortlessly with your Metamask wallet and connect to
                  the world of travel.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-center -mt-24">
            {/* cards  7&8*/}
            <div className="justify-self-center grid grid-flow-row mb-9">
              <Image
                height={330}
                width={330}
                src={f1}
                className="justify-self-center rounded-lg"
              />
              <div className="justify-self-center bg-slate-300 rounded-lg text-[#0e0e0e] grid grid-flow-row w-52 -mt-36 p-3">
                {" "}
                <h3 className="justify-self-center text-cyan-700 italic">
                  REAL-TIME PROGRESS TRACKING
                </h3>
                <p className="justify-self-center">
                  Monitor your tasks, rewards, and journey progress on your
                  personalized dashboard.
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
                <h3 className="justify-self-center text-cyan-700 italic">
                  SECURE VERIFICATION
                </h3>
                <p className="justify-self-center">
                  Our team ensures the authenticity of your travel proofs and
                  rewards.
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
