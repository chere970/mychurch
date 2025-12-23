import React from "react";
import LeaderCard from "@/components/cards/leaderCard";
import "../globals.css";
const page = () => {
  return (
    <div className="min-h-screen mt-20">
      <div>
        <h1 className="text-4xl font-bold text-center my-10">
          Meet Out Main Leaders
        </h1>
      </div>
      <LeaderCard />
    </div>
  );
};

export default page;
