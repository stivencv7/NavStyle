import React from "react";
import visa from "../../../assets/images/visa.png";
import savings from "../../../assets/images/USD Savings.png";
import { CardItem } from "../../../share/CardItem";

export const SectionCards = () => {
  return (
    <div className=" flex flex-col gap-[12px] h-[137px] ">
      <h2 className="mb-1 text-[16px]">Cards</h2>
      <CardItem image={visa} text={"My Card 1"} amount={`$ ${"565,00"}`} />
      <CardItem image={visa} text={"My Card 1"} amount={`$ ${"1652.00"}`} />
    </div>
  );
};
