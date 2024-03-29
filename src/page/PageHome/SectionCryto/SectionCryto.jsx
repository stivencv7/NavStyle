import React from "react";
import savings from "../../../assets/images/USD Savings.png";
import { CardItem } from "../../../share/CardItem";
import usd from "../../../assets/images/eth.jpeg";
import eth from "../../../assets/images/eth.jpeg";
import usdt from "../../../assets/images/usdt.jpeg";
import btc from "../../../assets/images/Bitcoin.jpeg";
export const SectionCryto = () => {
  return (
    <div className=" flex flex-col gap-[12px] max-laptop:h-[180px]  max-desktop:gap-[10px] min-[1366]:h-[195px]">
      <h2 className="text-[16px] max-desktop:text-[15px] max-desktop:relative max-desktop:top-1 font-type">Crypto</h2>
      <CardItem
        image={usdt}
        text={"USDT"}
        subtext={"Tether"}
        amount={`${"16.60000"}`}
      />
      <CardItem
        image={eth}
        text={`ETH`}
        subtext={"Ethereum"}
        amount={`${"3.340000"}`}
      />
      <CardItem
        image={btc}
        text={"BTC"}
        subtext={"Bitcoin"}
        amount={`${"4.550000"}`}
      />
    </div>
  );
};
