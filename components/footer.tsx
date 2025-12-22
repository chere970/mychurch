import React from "react";

const footer = () => {
  return (
    <>
      <div>
        <footer className="bg-gray-500 text-center text-white p-4 mt-10">
          &copy; {new Date().getFullYear()} MyChurch. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default footer;
