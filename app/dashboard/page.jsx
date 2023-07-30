import React from "react";
import UserNav from "../components/UserNav";

const DashboardPage = () => {
  return (
    <div className="grid grid-flow-col grid-cols-5">
      <div className="col-span-1">
        {" "}
        <UserNav />
      </div>
      <div className="col-span-3">
        <div>
          <h1>Hi! Welcome to your Dashboard!</h1>
          <h1>
            Youre Currently on <span>Trip name</span>
          </h1>
        </div>
        <div>
          <h1>Tasks</h1>
          <div>
            <div>
              <h2>Task Name</h2>
              <div>
                <h3>Difficulty of Task</h3>
                {/* etherium stars */}
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                qui odit dolor corporis, itaque, iure facilis molestiae laborum
                vero provident veritatis non magnam autem iusto, culpa minus
                perspiciatis hic dignissimos.
              </p>
              <div>
                <button>View Reward</button>
                <button>Submit Proof</button>
              </div>
            </div>
            <div>
              <div>
                {/* navigation buttons */}
                {/* Image */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            {" "}
            <h1>Colleted NFTs</h1>
            {/* maybe sorting */}
          </div>
          <div>{/* nft card */}</div>
        </div>
      </div>
      <div className="col-span-1 bg-slate-400">rhs</div>
    </div>
  );
};

export default DashboardPage;
