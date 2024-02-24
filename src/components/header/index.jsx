"use client";
import React from "react";
import Image from "next/image";
import { ImgDropdown } from "../../../public/images";

const Header = () => {
  return (
    <header className="bg-WHITE p-4 text-BLACK w-full">
      <div className=" ml-[1118px]">
        <div className="container mx-auto grid grid-cols-2  items-center">
          <h2 className="font-semibold text-lg ">Admin TukangIn</h2>
          <Image src={ImgDropdown} className="h-5 w-5 col-end-3 " />
        </div>
      </div>
    </header>
  );
};

export default Header;
