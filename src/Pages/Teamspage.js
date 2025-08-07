import React from "react";
import "../CSS(Pages)/teams.css";
import Footer from "./Components/Footer";
import About from "./Components/Teams/About";

import VehiclecontainerCV from "./Components/Teams/VehiclecontainerCV";
import VehiclecontainerTGW from "./Components/Teams/VehiclecontainerTGW";
import Routecomp from "./Components/RouteComp/Routecomp";
import TeamMembersCV from "./Components/Teams/TeamMembersCV";
import TeamMembersTGW from "./Components/Teams/TeamMembersTGW";

function TeamsPage({ Title, Description, State }) {
  let Route = "";
  let LastRoutename = "";
  let heading = "";
  let Rightsideimg = "";
  let Desc = "";

  if (State === "CV") {
    Route = "/zfr-cv";
    LastRoutename = "Zfr-Cv";
    heading = "Zhcet Formula Racing Combustion";
    Rightsideimg = "/assets/ZFR_down.jpg"; // ✅ Local image path
    Desc =
      "ZHCET Formula Racing, the formula-student racing team from ZHCET was established in the year 2013 to provide a testing ground for world-class engineers. The team of passionate undergraduate students from Aligarh Muslim University conceptualizes and fabricates a formula-style car and takes part in various national and international competitions throughout the year. Over the years, the team has recorded exponential growth in the Indian formula-student community.Being one of the fastest growing teams in the North Indian formula-student circuit, the team has consistently performed well at Formula Bharat, being the 6th and the only team from the northern region to complete the endurance test. Moreover, after being ranked in the top 10 consistently for the past three years, we were finally the winners of the Business Plan event at Formula Bharat 2022";
  }

  if (State === "EV") {
    Route = "/zfr-ev";
    LastRoutename = "Zfr-Ev";
    heading = "Zhcet Formula Racing Electric";
    Rightsideimg = "/assets/evteam.png"; // ✅ Local image path
    Desc =
      "ZFR Electric, launched in 2021, represents a transition toward EVs...";
  }

  if (State === "TGW") {
    Route = "/tgw";
    LastRoutename = "Tgw";
    heading = "Team Green Warriors";
    Rightsideimg = "/assets/TGW_team.jpeg"; // ✅ Local image path
    Desc =
      "A group of undergraduate students who were determined to revolutionize the transportation sector created Team Green Warriors in 2013. The team's goal is to create a three-wheeled hybrid vehicle to accommodate two passengers and their daily mobility needs. It should be aerodynamically designed with performance, safety, and ergonomic features, and it should also promote innovation and raise awareness of the need for environmentally friendly mobility options.The chapter got started in 2013 with the development of STRYKE 1.0. Later, in 2021, the team created Jackdaw, which earned them AIR 5 overall rank and AIR 1 in project planning at the SAENIS Efficycle 2021 Virtual Event. Finally, in 2022, the team won The Best Innovation Award at SAE-NIS EffiCycle, exemplifying their excellence in representing the university and bringing honor to the institution.This was done through continual innovation. With continuous evolution throughout the pandemic, the team is working on building a 4-wheeled electrically powered vehicle for its upcoming participation in 2023.";
  }

  return (
    <div className="maincontainer">
      <Routecomp
        Heading={heading}
        LastRoutename={LastRoutename}
        Route={Route}
      />
      <About Rightsideimg={Rightsideimg} Desc={Desc} />

      {State !== "EV" &&
        (State === "CV" ? <VehiclecontainerCV /> : <VehiclecontainerTGW />)}

      {State !== "EV" ? (
        State === "CV" ? (
          <TeamMembersCV />
        ) : (
          <TeamMembersTGW />
        )
      ) : (
        <div
          style={{
            width: "100%",
            color: "gray",
            fontStyle: "italic",
            padding: "40px",
            textAlign: "center",
          }}
        >
          To be updated soon
        </div>
      )}

      <Footer />
    </div>
  );
}

export default TeamsPage;
