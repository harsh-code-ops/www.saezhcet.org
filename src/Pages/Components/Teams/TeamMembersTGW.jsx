import React from "react";
import "./Teammembers.css";
import TGWmembers from "./TeamMembersDataTGW";

const TeamMembersTGW = () => {
  return (
    <div className="team-section">
      {" "}
      {/* Added unique class */}
      <div className="mainmemberscon">
        <div className="teamheading">THE TEAM</div>
        <div className="lineborder mm"></div>

        <div
          className="leaders"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div
            className="leadericon"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/leadericon.jpg)`,
            }}
          ></div>

          <div className="leadercon">
            {TGWmembers[0].Leaders.map((leader, index) => (
              <div key={index} className="leader-card">
                <img
                  src={
                    leader.Photo
                      ? `${process.env.PUBLIC_URL}${leader.Photo}`
                      : `${process.env.PUBLIC_URL}/assets/default.png`
                  }
                  alt={leader.Name}
                  className="leader-img"
                />
                <div className="namemm">{leader.Name}</div>
                <div className="postmm">{leader.Post}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="restmembers"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="halfteamcon">
            <div className="tchnclicn"></div>
            <div className="hh">TGW Members</div>
            <div className="memcardcon">
              {TGWmembers[1].TechnicalMembers.map((member, index) => (
                <div key={index} className="coon">
                  <div className="namemm">{member.Name}</div>
                  <div className="postmm">{member.Post}</div>
                </div>
              ))}
            </div>

            {/* <div className="halfteamcon">
              <div
                className="tchnclicn"
                style={{ backgroundImage: "url('/assets/website.jpg')" }}
              ></div>
              <div className="hh">Web Developer</div>
              <div className="memcardcon">
                {TGWmembers[2].WebDeveloper.map((member, index) => (
                  <div key={key} className="coon">
                    <div className="namemm">{i.Name}</div>
                    <div className="postmm">{i.Post}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersTGW;
