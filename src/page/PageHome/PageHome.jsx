import React from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { SectionAccounts } from "./SectionAccounts/SectionAccounts";
import { SectionCards } from "./SectionCards/SectionCards";
import { SectionCryto } from "./SectionCryto/SectionCryto";

export const PageHome = () => {
  return (
    <div className=" bg-[#191E25] p-[36px] rounded-[32px] w-[52%] text-body h-[672px] ">
      <SectionNav />
      <div className="flex flex-col h-[538.74px] justify-between ">
        <SectionAccounts/>
        <SectionCards/>
        <SectionCryto/>
      </div>
    </div>
  );
};
