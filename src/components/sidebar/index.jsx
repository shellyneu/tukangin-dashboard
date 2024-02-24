"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ImgCraftman,
  ImgCraftmanFilled,
  ImgLogo,
  ImgTransaction,
  ImgTransactionFilled,
  ImgUser,
  ImgUserFilled,
} from "../../../public/images";

const Sidebar = () => {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isTransactionClicked, setIsTransactionClicked] = useState(false);
  const [isCraftmanClicked, setIsCraftmanClicked] = useState(false);

  const handleUserClick = () => {
    setIsUserClicked(true);
    setIsTransactionClicked(false);
    setIsCraftmanClicked(false);
  };

  const handleTransactionClick = () => {
    setIsUserClicked(false);
    setIsTransactionClicked(true);
    setIsCraftmanClicked(false);
  };

  const handleCraftmanClick = () => {
    setIsUserClicked(false);
    setIsTransactionClicked(false);
    setIsCraftmanClicked(true);
  };

  return (
    <>
      <aside className="h-screen bg-white p-4">
        <div className="grid grid-cols-2  font-semibold text-[26px] mb-4 text-PRIMARY items-center ml-[-90px]">
          <Image src={ImgLogo} className="w-10 h-10 ml-[100px]" />
          <p className="">TukangIn</p>
        </div>

        <ul className="pt-[30px]">
          <li
            className={`mb-2 grid grid-cols-2 ml-[-90px] items-center pb-4 ${
              isUserClicked ? "text-PRIMARY" : ""
            }`}
          >
            {isUserClicked ? (
              <Image src={ImgUserFilled} className="w-7 h-7 ml-[100px]" />
            ) : (
              <Image
                src={ImgUser}
                className="w-7 h-7 ml-[100px]"
                onClick={handleUserClick}
              />
            )}
            <a
              href="#"
              className={` ${
                isUserClicked ? "text-PRIMARY" : "text-GREYONE"
              } hover:text-PRIMARY`}
              onClick={handleUserClick}
            >
              Pengguna
            </a>
          </li>
          <li
            className={`mb-2 grid grid-cols-2 ml-[-90px] items-center pb-4 ${
              isTransactionClicked ? "text-PRIMARY" : ""
            }`}
          >
            {isTransactionClicked ? (
              <Image
                src={ImgTransactionFilled}
                className="w-7 h-7 ml-[100px]"
              />
            ) : (
              <Image
                src={ImgTransaction}
                className="w-7 h-7 ml-[100px]"
                onClick={handleTransactionClick}
              />
            )}
            <a
              href="#"
              className={` ${
                isTransactionClicked ? "text-PRIMARY" : "text-GREYONE"
              } hover:text-PRIMARY`}
              onClick={handleTransactionClick}
            >
              Transaksi
            </a>
          </li>
          <li
            className={`mb-2 grid grid-cols-2 ml-[-90px] items-center ${
              isCraftmanClicked ? "text-PRIMARY" : ""
            }`}
          >
            {isCraftmanClicked ? (
              <Image src={ImgCraftmanFilled} className="w-7 h-7 ml-[100px]" />
            ) : (
              <Image
                src={ImgCraftman}
                className="w-7 h-7 ml-[100px]"
                onClick={handleCraftmanClick}
              />
            )}
            <a
              href="#"
              className={` ${
                isCraftmanClicked ? "text-PRIMARY" : "text-GREYONE"
              } hover:text-PRIMARY`}
              onClick={handleCraftmanClick}
            >
              Tukang
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
