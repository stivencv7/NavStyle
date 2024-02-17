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
import { Icon } from "../../assets/images/Icon";
import { IconShare } from "../../assets/images/IconShare";
import { IconMoneyDolar } from "../../assets/images/IconMoneyDolar";
import { IconMessageInfo } from "../../assets/images/IconMessageInfo";
import { IconHaus } from "../../assets/images/IconHaus";
import { IconUsers } from "../../assets/images/IconUsers";
import { IconLanguage } from "../../assets/images/IconLanguage";
import { IconLogout } from "../../assets/images/IconLogout";
export const Sidebar = ({moreStyle}) => {
  return (
    <div className={` bg-[#191E25] w-[120px] flex flex-col items-center  justify-between pb-8 py-[32px] px-[31px] h-[736px] ${moreStyle}`}>
      
      <ul className="flex flex-col gap-[36px]">
        <LinkSidebar moreStyle={'w-[22px] h-[22px]'}  icon={<IconHaus />} />
        <LinkSidebar  icon={<IconMoneyDolar className="w-[18.4px]" />} />
        <LinkSidebar icon={<IconUsers/>} />
        <LinkSidebar icon={<IconShare />} />
        <LinkSidebar icon={<Icon/>} />
      </ul>

      <ul className="flex flex-col  h-[170px] justify-between  ">
        <LinkSidebar  icon={<IconLanguage/>} />
        <LinkSidebar  icon={<IconLogout/>}/>
        <LinkSidebar  icon={<IconMessageInfo/>} />
      </ul>
    </div>
  );

};
