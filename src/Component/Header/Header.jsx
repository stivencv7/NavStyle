import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdSunny } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";
import logo from "../../assets/Vector.svg";
export const Header = ({moreStyle}) => {
  return (
    <header className={`flex justify-between px-[40px] bg-[#191E25] py-5 items-center absolute top-0 left-0 right-0 z-50 ${moreStyle}`}>
      <div className="w-[10%]">
        <img src={logo} className="w-[151.94px] h-[52px]" alt="" />
      </div>

      <div className="flex gap-4">
        <button>
          <HiMiniUserCircle className="w-[25.02px] h-[24.77px] text-color-icons"/>
        </button>
        <button>
          <MdSunny className="w-[25.02px] h-[24.77px] text-color-icons"/>
        </button>
        <button className="flex relative">
          <span className="">
            <RiNotification2Fill className="w-[25.02px] h-[24.77px] text-color-icons" />
            <p className="absolute -right-2 -top-2 text-[11px] rounded-full px-[5px]   bg-[#FFED00] text-black font-bold">
              2
            </p>
          </span>
        </button>
      </div>
    </header>
  );
};
