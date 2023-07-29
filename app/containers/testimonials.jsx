"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      <div className="innertestimonial grid grid-flow-col grid-cols-5 justify-center items-center">
        <div className="grid grid-flow-row text-white mx-6 justify-self-center col-span-3">
          <h1 className="text-6xl">Testimonials</h1>
          <p className="text-2xl pt-0">
            We're the best there is etc lorem ipsum dolorwere the best there is
            etc lorem ipsum dolor
          </p>
        </div>

        <div className="cards bg-[#ffffffa4] p-3 rounded-md h-80 justify-self-center col-span-2 mx-9 grid grid-flow-row italic">
          <p className="pt-1">
            "Wanderlust Journeys has completely transformed the way I travel! I
            embarked on the Exotic Island Retreat in Bali, and the tasks made me
            explore hidden gems I'd have otherwise missed. The NFT rewards were
            a fantastic addition - they serve as beautiful souvenirs of my
            adventure. Highly recot- this platform to all travel enthusiasts!"
          </p>
          <h4 className="justify-self-end content-end -mb-9">
            <span className="flex justify-end font-semibold">
              - Anna Gerovich (@annexplorer)
            </span>
            <span className="flex"> Novosibirsk, Russia</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
