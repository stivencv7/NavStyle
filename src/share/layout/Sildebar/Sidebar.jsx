import {React} from "react";
import { NavLink } from "react-router-dom";
import vector from '../../../assets/Vector2.svg'
export const Sidebar = ({moreStyle,listLinksHeader=[],listLinksFooter=[]}) => {
 
  return (
    <div
    className={`bg-[#191E25] w-[120px] flex relative  group-hover:w-[258px]  h-[910px] transition-width duration-1000 ease-in-out float-left  group  flex-col   py-[32px] px-[31px] ${moreStyle} overflow-x-hidden
    hover:overflow-visible`}
  >
    <img src={vector} alt="" className="absolute -right-14 -top-6 z-50 overflow-visible " />

    <nav className="w-[186px] h-[646px] flex flex-col  pt-[34px]">
      <div className="w-[120px] flex flex-col  justify-between  h-[100%] ">
       
        <ul className="flex flex-col gap-[36px]">
          {listLinksHeader.map((index) => (
            <NavLink
              key={index.id}
              to={index.path}
              className={`${index.className} flex items-center  h-[25px]  w-[186px]  gap-[4px]   text-color-icons `}
            >
              <p className="w-[1px] h-[18px] pl-5 text-type ">{index.icon}</p>
              <p className="barra w-[200%] pr-[0px]  relative -right-10   h-full  duration-500 group-hover:block opacity-0 group-hover:opacity-100  text-[16_px]">
                {index.text}
              </p>
            </NavLink>
          ))}
        </ul>

        <ul className="flex flex-col gap-[36px] w-[186px] ">
          {listLinksFooter.map((index) => (
            <button
              key={index.id}
              className={`${index.className}  flex items-center  h-[25px]    gap-[4px]  text-color-icons 
              ${index.id==3?'group-hover:rounded-[33px] w-[213px] ':'group-hover:rounded-[32px] group-hover:bg-[#3E4347] group-hover:px-[40px] group-hover:h-[44px]   h-[18px] pl-5  '} `}
            >
              <p className={`w-[58px] ${index.id==3?'group-hover:hidden pl-5':'w-[]'}`}>{index.icon}</p>
              <p className={`duration-500 group-hover:block opacity-0 group-hover:opacity-100 text-center${index.id==3?'bg-red-700  relative -left-[10px]   h-[64px] text-[12px] w-[100%] mr-3':'group-hover:hidden  flex '}`}>
                {index.text}
              </p>
            </button>
          ))}
        </ul>
      </div>
    </nav>
    <ul className="flex flex-col gap-[36px]">
        
      </ul>
  </div>
  )


};

