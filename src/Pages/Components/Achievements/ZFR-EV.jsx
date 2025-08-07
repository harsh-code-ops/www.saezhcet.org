import React from "react";
import Achvbox2 from "./Achvbox2";

const ZFREV = () => {
  return (
    <div className="conachv">
      <Achvbox2
        EventName="PI-EV 2022"
        OverallRank="13"
        overallscript="th"
        Rank1="9"
        NameRank1="PROCUREMENT STRATEGY"
        rank1script="th"
        Rank2="12"
        NameRank2="ENGINEERING DESIGN"
        rank2script="th"
        Rank3="12"
        NameRank3="SOFTWARE AND INTELLIGENCE INTEGRATION"
        rank3script="th"
      />

      <Achvbox2
        EventName="PI-EV 2023"
        OverallRank="X"
        overallscript=" "
        Rank1="4"
        NameRank1="PROCUREMENT STRATEGY"
        rank1script="th"
        Rank2="X"
        NameRank2="ENGINEERING DESIGN"
        rank2script=" "
        Rank3="8"
        NameRank3="Management"
        rank3script="th"
      />
    </div>
  );
};

export default ZFREV;
