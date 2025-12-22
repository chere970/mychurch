import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="text-cyan-400 text-6xl flex justify-center items-center h-screen flex-col gap-8">
        <div>
          <Image
            className="dark:invert"
            src="/image.png"
            alt="Next.js logo"
            width={500}
            height={200}
            priority
          />
        </div>
        <h1>Welcome to Bonoshal Enat Kale-Hiwot Church</h1>
      </div>
    </>
  );
};

export default page;
