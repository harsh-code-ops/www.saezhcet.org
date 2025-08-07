import React, { useState, useEffect } from "react";
import "./facmsg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GrBlockQuote } from "react-icons/gr";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Facultymessage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [disp1, setDisp1] = useState(false);
  const [disp2, setDisp2] = useState(false);

  const Disp1 = () => {
    setDisp1(true);
  };
  const NoDisp1 = () => {
    setDisp1(false);
  };
  const Disp2 = () => {
    setDisp2(true);
  };
  const NoDisp2 = () => {
    setDisp2(false);
  };
  return (
    <div className="mainfaccon">
      <div className="contactusheading">
        <div className="contitle">FACULTY MESSAGE</div>
        <div className="lineborder"></div>
        <div className="condesc">
          Hear from our Faculty Advisors who are the constant pillars of support
          and guidance for SAE ZHCETCollegiate Club!
        </div>
      </div>

      <div className="faccontainer">
        <div className="govbg1"></div>
        <div className="govbg2"></div>

        <div
          className="facfirstbox"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="msgcontainer">
            <div
              className="facimg"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/nafees_sir.jpeg)`,
                backgroundSize: "cover",
              }}
            >
              <div className="facsocialdisp">
                <a href="mailto:nafees2amu@rediffmail.com" className="icons">
                  <HiOutlineMail />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nafees-ahmad-aaa461138/"
                  className="icons"
                >
                  <RiLinkedinBoxLine />
                </a>
              </div>
            </div>
            <div className="facdetails">
              <div className="facname">Mr. Nafees Ahmad</div>
              <div className="facdesignation">Associate Professor</div>
              <div className="faccompany">
                Department of Mechanical Engineering
              </div>
            </div>
            <div className="textsfacmsg">
              {" "}
              <span>
                <ImQuotesLeft />
              </span>
              As the club's academic advisor, I've witnessed it grow and sustain
              itself. I relish seeing the members embrace the principles and
              legacies that the seniors left behind. The club has advanced
              significantly from the inaugural BAJA to ZFR 5.0, which would not
              have been possible without the generous assistance of AMU
              administration and alumni.
              <span>
                <ImQuotesRight />
              </span>
            </div>
          </div>
        </div>
        <div
          className="facsecondbox"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="msgcontainer">
            <div
              className="facimg"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/fahad3.png)`,
                backgroundSize: "cover",
                // backgroundPosition: "full",
              }}
            >
              <div className="facsocialdisp">
                <a href="mailto:sfahadanwer@zhcet.ac.in" className="icons">
                  <HiOutlineMail />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/syed-fahad-anwer-9407836/"
                  className="icons"
                >
                  <RiLinkedinBoxLine />
                </a>
              </div>
            </div>
            <div className="facdetails">
              <div className="facname">Prof. Syed Fahad Anwer</div>
              <div className="facdesignation">Professor</div>
              <div className="faccompany">
                Department of Mechanical Engineering
              </div>
            </div>
            <div className="textsfacmsg">
              <span>
                <ImQuotesLeft />
              </span>
              It is very impressive how far SAE ZHCET has come in such a short
              amount of time. Its current state is the result of the pupils'
              consistent effort and dedication. It is undoubtedly a club that
              stands out and has spoken the names of the Mechanical Engineering
              Department and Zakir Husain College of Engineering and Technology,
              AMU, out loud.
              <span>
                <ImQuotesRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facultymessage;
