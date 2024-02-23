import React from "react";
import logo from "../../../assets/Vector.svg";
import { IconSun } from "../../../assets/icons/IconSun";
import { IconNotification } from "../../../assets/icons/IconNotification";
import { IconCircleUser } from "../../../assets/icons/IconCircleUser";
export const Header = ({moreStyle}) => {
  return (
    <header className={`flex justify-between px-[40px] py-[16px] bg-[#191E25] items-center ${moreStyle}`}>
      <div className="w-[10%]">
        <img src={logo} className="w-[151.94px] h-[52px]" alt="" />
      </div>

      <div className="flex gap-4">
        <button>
          <IconCircleUser/>
        </button>
        <button>
          <IconSun/>
        </button>
        <button className="flex relative">
          <span >
            <IconNotification />
            <p className="absolute -right-2 -top-2 text-[11px] rounded-full px-[5px]   bg-[#FFED00] text-black font-bold">
              2
            </p>
          </span>
        </button>
      </div>
    </header>
  );
};
