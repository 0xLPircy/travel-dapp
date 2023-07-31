import Image from "next/image";
import React from "react";

const Rhs = () => {
  return (
    <div>
      <div>{/* user profile */}</div>
      <div>
        {/* rewards */}
        <h1>Your Rewards</h1>
        <ul>
          <li>
            {/* reward */}
            <Image />
            <div>
              <h3>Surfing Rookie</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium alias ipsum iure.
              </p>
            </div>
            <h2>+12xp</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rhs;
