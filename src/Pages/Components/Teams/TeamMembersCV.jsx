import React, { useEffect } from "react";
import "./Teammembers.css";
import CVmembers from "./TeamMembersDataCV";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamMembersCV = () => {
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

      {/* Leaders Section - Horizontal Layout with Images */}
      <div
        className="leaders"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          className="leadericon"
          style={{ backgroundImage: "url('/assets/leadericon.jpg')" }}
        ></div>

        <div className="leadercon">
          {CVmembers[0].Leaders.map((i, key) => (
            <div key={key} className="leader-card">
              <img
                src={i.Photo || "/assets/default.png"}
                alt={i.Name}
                className="leader-img"
              />
              <div className="namemm">{i.Name}</div>
              <div className="postmm">{i.Post}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Members Section (No Photos) */}
      <div
        className="restmembers"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {/* Technical Members */}
        <div className="halfteamcon">
          <div
            className="tchnclicn"
            style={{ backgroundImage: "url('/assets/tchnicalicon.jpg')" }}
          ></div>
          <div className="hh">Chasis Members</div>
          <div className="memcardcon">
            {CVmembers[1].ChasisMembers.map((i, key) => (
              <div key={key} className="coon">
                <div className="namemm">{i.Name}</div>
                <div className="postmm">{i.Post}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="halfteamcon">
          <div
            className="tchnclicn"
            style={{ backgroundImage: "url('/assets/tchnicalicon.jpg')" }}
          ></div>
          <div className="hh">Power Train Members </div>
          <div className="memcardcon">
            {CVmembers[2].PowerTrain.map((i, key) => (
              <div key={key} className="coon">
                <div className="namemm">{i.Name}</div>
                <div className="postmm">{i.Post}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Electromis Team*/}
        <div className="halfteamcon">
          <div className="electronicsicon"></div>
          <div className="hh">Electronics Team Members</div>
          <div className="memcardcon">
            {CVmembers[3].ElectronicsMembers.map((i, key) => (
              <div key={key} className="coon">
                <div className="namemm">{i.Name}</div>
                <div className="postmm">{i.Post}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="halfteamcon">
          <div
            className="tchnclicn"
            style={{ backgroundImage: "url('/assets/tchnicalicon.jpg')" }}
          ></div>
          <div className="hh">Vehicular Dynamics Members</div>
          <div className="memcardcon">
            {CVmembers[4].VDynamicsMembers.map((i, key) => (
              <div key={key} className="coon">
                <div className="namemm">{i.Name}</div>
                <div className="postmm">{i.Post}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Management Members */}
        <div className="halfteamcon">
          <div
            className="managemnticon"
            style={{ backgroundImage: "url('/assets/managementicon.png')" }}
          ></div>
          <div className="hh">Management Members</div>
          <div className="memcardcon">
            {CVmembers[5].ManagementMembers.map((i, key) => (
              <div key={key} className="coon">
                <div className="namemm">{i.Name}</div>
                <div className="postmm">{i.Post}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersCV;
