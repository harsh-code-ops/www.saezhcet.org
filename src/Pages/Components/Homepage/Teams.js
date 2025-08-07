import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Card from "../Card";
import "../Homepage/teams.css";
import { useNavigate } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

function Teams() {
  const [mobileview, setMobileview] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="teammaincontainer"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      {/*<div className='traingle'></div> */}
      <div className="teaminside">
        <div className="teamheading">OUR TEAMS</div>
        <div className="teamheadingdesc">
          Meet the dynamic teams fueling innovation at the our Club
        </div>

        <div className="cardcon">
          <Card
            Title="Team Green Warriors"
            Description="A group of undergraduate students who were determined to revolutionize the transportation sector created Team Green Warriors in 2013. The team's goal is to create a three-wheeled hybrid vehicle..."
            Id="tgw"
            Image="tgwcover.jpg"
            Linkedin="https://www.linkedin.com/in/team-green-warriors-212b7a162/"
            Insta="https://www.instagram.com/team_green_warriors/?hl=en"
            Facebook="https://www.facebook.com/TeamGreenWarriors"
            Youtube="https://www.youtube.com/@saezhcet1878"
          />
          <Card
            Title="Zhcet Formula Racing Combustion"
            Description="ZHCET Formula Racing, the formula-student racing team from ZHCET was established in the year 2013 to provide a testing ground for world-class engineers. The team of passionate undergraduate students...."
            Id="zfr-cv"
            Image="zfrteam.png"
            Linkedin="https://www.linkedin.com/company/zhcet-formula-racing-zfr/mycompany/"
            Insta="https://www.instagram.com/zhcet_formula_racing/?hl=en"
            Facebook="https://www.facebook.com/ZHCETFormulaRacing/"
            Youtube="https://www.youtube.com/@saezhcet1878"
          />
          {/* <Card */}
          {/* Title="Zhcet Formula Racing Electric" Description="The students of the */}
          {/* ZHCER Formula Racing Club launched ZFR Electric in 2021. It symbolizes */}
          {/* a leap towards the future as the automobile industry gradually */}
          {/* trans......." Id="zfr-ev" Image="zfrevteam.jpg" */}
          {/* Linkedin='https://www.linkedin.com/company/zhcet-formula-racing-zfr/mycompany/' */}
          {/* Insta='https://www.instagram.com/zhcet_formula_racing/?hl=en' */}
          {/* Facebook='https://www.facebook.com/ZHCETFormulaRacing/' */}
          {/* Youtube='https://www.youtube.com/@saezhcet1878' */}
          {/* /> */}
        </div>
      </div>
    </div>
  );
}

export default Teams;
