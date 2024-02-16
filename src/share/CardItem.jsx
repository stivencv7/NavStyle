import React from "react";

export const CardItem = ({ image, text, amount, subtext }) => {
  return (
    <div className="flex bg-[#3E4347] justify-between hover:bg-[#5E6061] px-3 rounded-[32px] items-center h-[46px] w-[550px] font-type">
      <div className="flex items-center gap-4">
        <div className="w-[35px] ">
          <img src={image} alt="" className="w-[90%] rounded-full" />
        </div>
        <span className="flex flex-col justify-center text-[14px]">
          {text}
          <p className="text-[14px] relative -top-1 sub-text-crypto">
            {subtext}
          </p>
        </span>
      </div>
      <div className="text-[16px]">{amount}</div>
    </div>
  );
};
