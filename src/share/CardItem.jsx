import React from "react";

export const CardItem = ({ image, text, amount, subtext }) => {
  return (
    <div className="flex bg-[#3E4347] justify-between hover:bg-[#5E6061] px-[12px] py-[6px] rounded-[41px] items-center h-[46px] w-[550px] font-type">
      <div className="flex items-center  w-[526px] hidden-[36px] justify-between">
        <div className="flex gap-[10px] h-[36px]">
          <img
            src={image}
            alt=""
            className="w-[36px] hidden-[36px] rounded-full "
          />

          <span className={`flex flex-col text-[14px] -400  justify-center  ${subtext ? "mt-1" : ""} `}
          >
            <p className="relative "> {text}</p>
            <p className="text-[14px] relative -top-1 sub-text-crypto">
              {subtext}
            </p>
          </span>
        </div>

        <div className="text-[16px]">{amount}</div>
      </div>
    </div>
  );
};
