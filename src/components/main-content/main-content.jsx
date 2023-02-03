import React, { useState } from "react";
import FiveDayForecast from "../FiveDayForecast";
import HighlightCard from "../highlight-card/highlight-card.component";
import Highlights from "../Highlights";
import { nanoid } from "nanoid";
import Button from "../button/button";

const MainContent = ({ weatherConditions }) => {
  // const [btnData, setBtnData] = useState([{
  //   id: nanoid(),
  //   content: &
  // }])

  return (
    <div className="bg-midnightBlue w-2/3 h-full pt-10 pr-32 pl-40">
      <header className="flex justify-end">
        <Button btnStyle="bg-nearWhite  text-[#110E3C]" content="&deg;C" />
        <Button btnStyle="bg-lightBlue  text-nearWhite" content="&deg;F" />
      </header>

      {/* <FiveDayForecast weatherConditions={weatherConditions}/> */}
      <h3 className="mt-[72px] text-nearWhite text-2xl font-bold">
        Today's Highlights
      </h3>
      <div className="grid grid-rows-2 grid-cols-2 gap-y-12">
        <HighlightCard
          highlightType="Wind Status"
          highlightData="7"
          measurement="mph"
        />
        <HighlightCard
          highlightType="Humidity"
          highlightData="84"
          measurement="%"
        />
        <HighlightCard
          highlightType="Visibility"
          highlightData="6.4"
          measurement="miles"
        />
        <HighlightCard
          highlightType="Air Pressure"
          highlightData="998"
          measurement="mb"
        />
      </div>
    </div>
  );
};

export default MainContent;
