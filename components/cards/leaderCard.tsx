import React from "react";
import Image from "next/image";

const LeaderCard = () => {
  return (
    <div className="flex flex-wrap my-10 gap-6  justify-center">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-5 w-64"
        >
          <p className="text-2xl font-semibold mb-2">Leader</p>
          <Image src="/leader.png" alt="Leader" width={200} height={100} />
          <div className="flex flex-col p-4 font-bold">
            <p>Name: Habte Teshome</p>
            <p>Phone: +251910...</p>
            <p>Email: mainleader@gmail.com</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderCard;
