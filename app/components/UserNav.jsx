import Image from "next/image";
import React from "react";
import logo from "@/assets/userNavLogo.png";

const UserNav = () => {
  return (
    <div>
      <div>
        <Image height={60} width={60} src={logo} />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Explore Trips</li>
          <li>DashBoard</li>
          <li>Past Trips</li>
          <li>My Rewards</li>
          <li></li>
          <li>Settings</li>
          <li>Help & FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default UserNav;
