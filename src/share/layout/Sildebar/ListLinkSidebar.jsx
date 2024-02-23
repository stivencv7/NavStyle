import React from "react";
import { Sidebar } from "./Sidebar";
import { IconHaus } from "../../../assets/icons/IconHaus";
import { IconMoneyDolar } from "../../../assets/icons/IconMoneyDolar";
import { IconUsers } from "../../../assets/icons/IconUsers";
import { IconShare } from "../../../assets/icons/IconShare";
import { Icon } from "../../../assets/icons/Icon";
import { IconLanguage } from "../../../assets/icons/IconLanguage";
import { IconLogout } from "../../../assets/icons/IconLogout";
import { IconMessageInfo } from "../../../assets/icons/IconMessageInfo";

export const ListLinkSidebar = ({ className }) => {
  const listLinksHeader = [
    { id: "1", path: "/", icon: <IconHaus />, text: "Home", className: "text-type" },
    {
      id: "2",
      path: "/a",
      icon: <IconMoneyDolar />,
      text: "Transaction",
      className: "text-[16px] text-type",
    },
    {
      id: "3",
      path: "/a",
      icon: <IconUsers />,
      text: "Beneficiar",
      className: "text-[16px] text-type",
    },
    {
      id: "4",
      path: "/a",
      icon: <IconShare />,
      text: "Share the app",
      className: "text-[16px]",
    },
    {
      id: "5",
      path: "/a",
      icon: <Icon />,
      text: "Accesibility",
      className: "text-[16px]",
    },
  ];

  const listLinksFooter = [
    {
      id: "1",
      path: "/a",
      icon: <IconLanguage />,
      text: "Language",
      className: "",
    },
    {
      id: "2",
      path: "/a",
      icon: <IconLogout />,
      text: "Log_out ",
      className: "",
    },
    {
      id: "3",
      path: "/a",
      icon: <IconMessageInfo />,
      text: "Do not shar your Google Authentificator or SMS code with anyone, icncluiding Qoripay customer support staff",
      className: "",
    },
  ];

  return (
    <Sidebar
      listLinksHeader={listLinksHeader}
      listLinksFooter={listLinksFooter}
      moreStyle={className}
    />
  );
};
