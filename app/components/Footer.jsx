import Image from "next/image";
import React from "react";
import insta from "@/assets/Insta.png";
import meta from "@/assets/meta.png";
import x from "@/assets/x.png";

const Footer = () => {
  return (
    <div className="grid grid-flow-col text-[#dbdbdb] pt-6">
      <Image height={150} width={150} src="/logo.png" />
      <h1>TRAVEL DAPP</h1>
      <div>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Blog and Travel Guides</li>
          <li>Partner Programs</li>
          <li>NFT and Rewards</li>
        </ul>
      </div>
      <div>
        <div>
          <Image height={30} width={30} src={insta} />
          <Image height={30} width={30} src={meta} />
          <Image height={30} width={30} src={x} />
        </div>
        <form action="">
          <label htmlFor="">Newsletter:</label>
          <input type="email" placeholder="Enter Email Id..." />
          <input type="submit" placeholder="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
