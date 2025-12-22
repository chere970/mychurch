import Link from "next/link";
import React from "react";
import Image from "next/image";

const nav = () => {
  return (
    <>
      <nav className="bg-gray-500 items-center text-amber-50 p-5 justify-between flex">
        <div>
          <Link href="/">
            <Image
              src="/image.png"
              alt="Logo"
              width={150}
              height={50}
              className="rou"
            />
          </Link>
        </div>
        <div className="flex justify-between text-xl   font-semibold text-white">
          <div className="mx-4">
            <Link href="/">Home</Link>
          </div>
          <div className="mx-4">
            <Link href="/about">About</Link>
          </div>
          <div className="mx-4">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <Link href="/login">
            <button className="bg-amber-500 text-black px-4 py-2 rounded-lg hover:bg-amber-600">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default nav;
