import React, { useEffect } from "react";
import "./Teammembers.css";
import EVmembers from "./TeamMembersDataCV";
import Membercard from "../Membercard";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamMembersEV = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="mainmemberscon"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="teamheading">THE TEAM</div>
      <div className="lineborder mm"></div>
      <div
        className="leaders"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {EVmembers[0].Leaders.map((i, key) => {
          return (
            <Membercard
              Name={i.Name}
              Post={i.Post}
              Image={i.Photo}
              LinkedIn={i.LinkedIn}
              Gmail={i.Gmail}
              Insta={i.Insta}
            />
          );
        })}
      </div>
      <div
        className="restmembers"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="halfteamcon">
          <div className="hh">Technical Members</div>
          <div className="memcardcon">
            {EVmembers[1].TechnicalMembers.map((i, key) => {
              return (
                <Membercard
                  Name={i.Name}
                  Post={i.Post}
                  Image={i.Photo}
                  LinkedIn={i.LinkedIn}
                  Gmail={i.Gmail}
                  Insta={i.Insta}
                />
              );
            })}
          </div>
        </div>
        <div className="halfteamcon">
          <div className="hh">Management Members</div>
          <div className="memcardcon">
            {EVmembers[2].ManagementMembers.map((i, key) => {
              return (
                <Membercard
                  Name={i.Name}
                  Post={i.Post}
                  Image={i.Photo}
                  LinkedIn={i.LinkedIn}
                  Gmail={i.Gmail}
                  Insta={i.Insta}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersEV;
