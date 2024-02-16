import React from "react";
import { IoMdHome } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { MdShare } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { LinkSidebar } from "../../share/LinkSidebar";
export const Sidebar = ({moreStyle}) => {
  return (
    <div className={` bg-[#191E25] w-[120px] flex flex-col items-center  justify-between pb-8 pt-[34px] ${moreStyle}`}>
      
      <ul className="flex flex-col gap-[36px]">
        <LinkSidebar moreStyle={'w-[22px] h-[22px]'}  icon={<IoMdHome className='text-[#FFED00] w-[18.32px] h-[18.5px]'/>} />
        <LinkSidebar  icon={<RiMoneyDollarCircleFill className="w-[18.4px]" />} />
        <LinkSidebar icon={<HiUsers className="w-[20px] h-[15px]"/>} />
        <LinkSidebar icon={<MdShare />} />
        <LinkSidebar icon={<MdEmojiPeople />} />
      </ul>

      <ul className="flex flex-col gap-6 pt-10 ">
        <LinkSidebar  icon={<MdLanguage className='text-[#FFED00]'/>} />
        <LinkSidebar  icon={<MdLogout className='text-[#FFED00]'/>}/>
        <LinkSidebar  icon={<FiMessageSquare className='mess-inf text-[#FFED00]'></FiMessageSquare>} />
      </ul>
    </div>
  );

};
