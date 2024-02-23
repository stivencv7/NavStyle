import React, { useState } from "react";
import { AiTwotoneEye } from "react-icons/ai";
import { NavHome } from "../../../Component/NavHome/NavHome";

export const SectionNav = ({
  onclickResume,
  onclickAccounts,
  onclickCards,
  onClickWallets,
  moreStyle,
  visibleResume,
  visibleAccoints,
  visibleCards,
  visibleCrypto,
}) => {
  const items = [
    {
      icon:"Resume",
      text: "Resume",
    },
    {
      text: "Account",
    },
    {
      text: "Card",
    },
  ];

  const changeActiveNavItem = (item) => {
    const newItems = items.map(({ active, ...rest }) => rest);
    newItems[item].active = true;

    this.setState({
      items: newItems,
    });
  };

  const renderItem = ({ icon, text, active }) => {
    return (
      <React.Fragment key={text}>
        <i className={icon} />
        <span className="nav-item-text">{text}</span>
        <p>{text}</p>
      </React.Fragment>
    );
  };

  return (
    <NavHome
      items={items}
      renderItem={renderItem}
      changeActiveNavItem={changeActiveNavItem}
    />
  );
};

// <div className="flex  text-gray-link text-[16px]  max-laptop:text-[15px] font-type justify-between max-desktop:w-[100%]" >
//   <nav className="flex justify-between w-[338px] h-[25px]  max-desktop:w-[63%]">
//     <button onClick={onclickResume} className={`${visibleResume ?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Resume</button>
//     <button onClick={onclickAccounts}
//     className={`${(visibleAccoints)&&(!visibleResume && !visibleCards && !visibleCrypto)?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Accounts</button>
//     <button onClick={onclickCards} className={`${(visibleCards)&&(!visibleResume && !visibleAccoints && !visibleCrypto)?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Cards</button>
//     <button onClick={onClickWallets} className={`${(visibleCrypto)&&(!visibleResume && !visibleAccoints && !visibleCards)?'text-[#FFED00] border-b-[1px] border-b-[#FFED00]':''}`}>Wallets</button>
//   </nav>

//   <div className="relative text-body flex flex-col items-end  max-desktop:w-[27%">
//     <span className="flex items-center gap-1  font-type">
//       Total balance
//       <AiTwotoneEye />
//     </span>
//     <h1 className=" text-[24px] text-end mr-2">$ 80.60</h1>
//   </div>
// </div>
