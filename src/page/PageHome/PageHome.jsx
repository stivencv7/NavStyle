import React from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { SectionAccounts } from "./SectionAccounts/SectionAccounts";
import { SectionCards } from "./SectionCards/SectionCards";
import { SectionCryto } from "./SectionCryto/SectionCryto";

export const PageHome = () => {
  return (
    <div className=" bg-[#191E25] p-[36px] xl:p-[8px] rounded-[32px] w-[52%] text-body flex flex-col items-center xl:h-[100%] ">
      <SectionNav />
      <div className="flex flex-col h-[538.74px] xl:h-[60%] justify-between xl:gap-[10px] ">
        <SectionAccounts/>
        <SectionCards/>
        <SectionCryto/>
      </div>
    </div>
  );
};
