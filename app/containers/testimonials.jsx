import React from "react";
import bg from "../../assets/testimonialBg.png";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="testimonial grid grid-flow-row justify-center items-center">
      {/* <Image
        height={900}
        width={900}
        src={bg}
        className="justify-self-center"
      ></Image> */}
      <div className="innertestimonial grid grid-flow-col py-48">
        <div className="grid grid-flow-row text-white mx-6">
          <h1>Testimonials</h1>
          <p>
            were the best there is etc lorem ipsum dolorwere the best there is
            etc lorem ipsum dolor
          </p>
        </div>
        <div className="cards bg-slate-100 mx-6">
          <p>
            "Wanderlust Journeys has completely transformed the way I travel! I
            embarked on the Exotic Island Retreat in Bali, and the tasks made me
            explore hidden gems I'd have otherwise missed. The NFT rewards were
            a fantastic addition - they serve as beautiful souvenirs of my
            adventure. Highly recommend this platform to all travel
            enthusiasts!"
          </p>
          <h4>
            <span>- Anna Gerovich (@annexplorer)</span>
            <span>Novosibirsk, Russia</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
