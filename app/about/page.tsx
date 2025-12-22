import React from "react";
// import { Card, CardHeader, CardBody, Image } from "@heroui/card";
import { Card, CardHeader, CardBody } from "@heroui/card";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex justify-around items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl"> Leaders</h1>
          <div>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  // src="https://heroui.com/images/hero-card-complete.jpeg"
                  src="/image.png"
                  width={270}
                  height={100}
                />
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex">Youth Leaders</div>
      </div>
    </>
  );
};

export default page;
