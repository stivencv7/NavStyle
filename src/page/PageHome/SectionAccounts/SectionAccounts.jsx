import React from "react";
import { CardItem } from "../../../share/CardItem";
import usd from "../../../assets/images/USD.png";
import savings from "../../../assets/images/USD Savings.png";

export const SectionAccounts = () => {
  return (
    <div className=" flex flex-col gap-[12px] h-[137px] max-laptop:gap-[10px] ">
      <h2 className="max-laptop:text-[15px] max-desktop:text-[16px] font-type">Account</h2>
      <CardItem image={usd} text={"USD"} amount={`$ ${"4.565,00"}`} />
      <CardItem image={savings} text={"USD Savings"} amount={`$ ${"860,00"}`} />
    </div>
  );
};
