import React from "react";
import "./Achievements.css";
import Achvbox from "./Achvbox";

const Cvzfr = () => {
  const Zfrcv = [
    {
      Achv: [
        {
          Formulaimperial: [
            { name: "Business", rank: "5th" },
            { name: "Business", rank: "5th" },
          ],
        },
        { name: "Right" },
      ],
    },
    { Achv: [{ name: "Taimoor" }, { name: "Right" }] },
    { Achv: [{ name: "Mirza" }, { name: "Right" }] },
  ];
  return (
    <div className="conachv">
      <Achvbox
        EventName="FORMULA IMPERIAL 2022"
        OverallRank="6"
        overallscript="th"
        Rank1="5"
        NameRank1="ENGINEERING DESIGN"
        rank1script="th"
        Rank2="3"
        NameRank2="COST AND MANUFACTURING"
        rank2script="rd"
        Rank3="8"
        NameRank3="BUSINESS PLAN PRESENTATION"
        rank3script="th"
      />

      <Achvbox
        EventName="FORMULA BHARAT 2022"
        OverallRank="5"
        overallscript="th"
        Rank1="5"
        NameRank1="ENGINEERING DESIGN"
        rank1script="th"
        Rank2="1"
        NameRank2="BUSINESS PLAN PRESENTATION"
        rank2script="st"
        Rank3="3"
        NameRank3="COST AND MANUFACTURING"
        rank3script="rd"
      />

      <Achvbox
        EventName="FORMULA BHARAT 2023"
        OverallRank="6"
        overallscript="th"
        Rank1="X"
        NameRank1="ENGINEERING DESIGN"
        rank1script=""
        Rank2="2"
        NameRank2="BUSINESS PLAN PRESENTATION"
        rank2script="nd"
        Rank3="X"
        NameRank3="COST AND MANUFACTURING"
        rank3script=" "
      />
    </div>
  );
};

export default Cvzfr;
