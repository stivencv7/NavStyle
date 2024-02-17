import React, { useState } from "react";
import { AiTwotoneEye } from "react-icons/ai";

export const SectionNav = ({onclickResume,onclickAccounts,onclickCards,onClickWallets,
  moreStyle}) => {
    const [visibleResume, setVisibleResume] = useState(true);
    const [visibleAccoints, setVisibleAccoints] = useState(false);
    const [visibleCards, setVisibleCards] = useState(false);
    const [visibleCrypto, setVisibleCrypto] = useState(false);
  
    const handleChangeResume=()=>{
      setVisibleAccoints(false);
      setVisibleCards(false)
      setVisibleCrypto(false)
      setVisibleResume(true)
    }

    const handleChangeAccoints=()=>{
      setVisibleAccoints(true);
      setVisibleCards(false)
      setVisibleCrypto(false)
      setVisibleResume(false)
    }

    const handleChangeCards=()=>{ 
      setVisibleAccoints(false);
      setVisibleCards(true)
      setVisibleCrypto(false)
      setVisibleResume(false)
    }

    const handleChangeCrypto=()=>{
      setVisibleAccoints(false);
      setVisibleCards(false)
      setVisibleCrypto(true)
      setVisibleResume(false)
    }
  
  return (
    <div className="flex  text-gray-link text-[16px] font-type gap-[79px]">
      <nav className="flex justify-between w-[338px] h-[25px]">
        <button onMouseUp={handleChangeResume} onClick={onclickResume} className={`${visibleResume?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Resume</button>
        <button onMouseUp={handleChangeAccoints} onClick={onclickAccounts} className={`${visibleAccoints?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Accounts</button>
        <button onMouseUp={handleChangeCards} onClick={onclickCards} className={`${visibleCards?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Cards</button>
        <button onMouseUp={handleChangeCrypto} onClick={onClickWallets} className={`${visibleCrypto?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Wallets</button>
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
