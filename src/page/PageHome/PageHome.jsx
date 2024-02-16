import React from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { SectionAccounts } from "./SectionAccounts/SectionAccounts";
import { SectionCards } from "./SectionCards/SectionCards";
import { SectionCryto } from "./SectionCryto/SectionCryto";

export const PageHome = () => {
  return (
    <div className=" bg-[#191E25]  xl:p-[8px] rounded-[32px] 2xl:p-[36px] 2xl:w-[40%] w-[52%] text-body flex flex-col items-center 2xl:h-[80%]">
      <SectionNav />
      <div className="flex flex-col 2xl:h-[80%] h-[538.74px] xl:h-[60%] 2xl:justify-between xl:gap-[10px] ">
        <SectionAccounts/>
        <SectionCards/>
        <SectionCryto/>
      </div>
    </div>
  );
};
