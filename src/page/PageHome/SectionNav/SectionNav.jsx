import React from "react";
import { NavLink } from "react-router-dom";
import { AiTwotoneEye } from "react-icons/ai";

export const SectionNav = () => {
  return (
    <div className="flex  text-gray-link text-[16px] font-type gap-[79px]">
      <nav className="flex justify-between w-[338px] h-[25px]">
        <NavLink to={"/resumen"} className="active">Resume</NavLink>
        <NavLink to={"/Accounts"}className=" active:text-[#FFED00]">Accounts</NavLink>
        <NavLink to={"/wallets"} className="active:text-[#FFED00]">Cards</NavLink>
        <NavLink to={"/wallets"} className="">Wallets</NavLink>
      </nav>
      
      <div className="relative text-body">
        <span className="flex items-center gap-1  font-type">
          Total balance
          <AiTwotoneEye />
        </span>
        <h1 className=" text-[24px] text-end mr-1">$ 80.60</h1>
      </div>
    </div>
  );
};
