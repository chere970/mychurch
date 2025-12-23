import Link from "next/link";
import React from "react";
import Image from "next/image";

const nav = () => {
  return (
    <>
      <nav className="bg-blue-200 items-center  text-black  p-1 mt-3 justify-between flex fixed top-0 w-full opacity-95 z-10">
        <div>
          <Link href="/">
            <Image
              src="/image.png"
              alt="Logo"
              width={150}
              height={20}
              className="rounded-lg h-16 w-auto m"
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
