import React, { useState } from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { SectionAccounts } from "./SectionAccounts/SectionAccounts";
import { SectionCards } from "./SectionCards/SectionCards";
import { SectionCryto } from "./SectionCryto/SectionCryto";

export const PageHome = () => {
  const [visibleAccoints, setVisibleAccoints] = useState(true);
  const [visibleCards, setVisibleCards] = useState(true);
  const [visibleCryto, setVisibleCryto] = useState(true);
  // const [visibleResume, setVisibleResume] = useState(true);

  const handleChangeAccoints = () => {
    setVisibleAccoints(true);
    setVisibleCards(false);
    setVisibleCryto(false);
    setVisibleResume(false);
  };

  const handleChangeCards = () => {
    setVisibleCards(true);
    setVisibleAccoints(false);
    setVisibleCryto(false);
    setVisibleResume(false);
  };

  const handleChangeCryto = () => {
    setVisibleCryto(true);
    setVisibleCards(false);
    setVisibleAccoints(false);
    setVisibleResume(false);
  };

  const handleChangeResume=()=>{
    setVisibleCryto(true);
    setVisibleCards(true);
    setVisibleAccoints(true);
    setVisibleResume(true);
  }

  return (
    <div className=" bg-[#191E25]  rounded-[32px] p-[36px] w-[622px] h-[672px] text-body flex flex-col items-center ">
      <SectionNav
        onclickAccounts={handleChangeAccoints}
        onclickCards={handleChangeCards}
        onClickWallets={handleChangeCryto}
        onclickResume={handleChangeResume}
      />
      <div className="flex flex-col  w-[550px] h-[600px] justify-between">
        {visibleAccoints && <SectionAccounts />}
        {visibleCards && <SectionCards />}
        {visibleCryto && <SectionCryto />}
      </div>
    </div>
  );
};
