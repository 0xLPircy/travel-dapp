import React from "react";
import UserNav from "../components/UserNav";

const DashboardPage = () => {
  return (
    <div className="grid grid-flow-col grid-cols-5">
      <div className="col-span-1">
        {" "}
        <UserNav />
      </div>
      <div className="col-span-3">center</div>
      <div className="col-span-1 bg-slate-400">rhs</div>
    </div>
  );
};

export default DashboardPage;
