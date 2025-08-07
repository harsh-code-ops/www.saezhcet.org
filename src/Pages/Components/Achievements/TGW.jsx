import React from "react";
import Achvbox from "./Achvbox";

const TGW = () => {
  return (
    <div className="conachv">
      <Achvbox
        EventName="SAE-NIS EFFICYCLE 2021"
        OverallRank="5"
        overallscript="th"
        Rank1="1"
        NameRank1="PROJECT PLAN"
        rank1script="st"
        Rank2="4"
        NameRank2="IPG CARMAKER DYNAMIC EVALUATION"
        rank2script="th"
        Rank3="5"
        NameRank3="ENDURANCE RUN"
        rank3script="th"
      />

      <Achvbox
        EventName="EFFICYCLE 2022"
        OverallRank="5"
        overallscript="th"
        Rank1="1"
        NameRank1="BEST INNOVATION AWARD"
        rank1script="st"
        Rank2="X"
        NameRank2="IPG CARMAKER DYNAMIC EVALUATION"
        rank2script=""
        Rank3="X"
        NameRank3="ENDURANCE RUN"
        rank3script=""
      />

      <Achvbox
        EventName="EffiQue(ADAS) 2024"
        OverallRank="6"
        overallscript="th"
        Rank1="X"
        NameRank1="PROJECT PLAN"
        rank1script=""
        Rank2="X"
        NameRank2="IPG CARMAKER DYNAMIC EVALUATION"
        rank2script=""
        Rank3="X"
        NameRank3="ENDURANCE RUN"
        rank3script=""
      />
    </div>
  );
};

export default TGW;
