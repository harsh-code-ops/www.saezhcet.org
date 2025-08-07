import React, { useState } from "react";
import "../../CSS(Pages)/footer.css";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { AiFillPhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { ImLocation2 } from "react-icons/im";

import { Link, NavLink } from "react-router-dom";

function Footer() {
  const [show, setIsShow] = useState(false);

  return (
    <div className="mainfooter">
      <div className="footerlayer">
        <div className="ftlayerleft"></div>
        <div className="ftlayermid1"></div>
        <div className="ftlayermid2"></div>
        <div className="ftlayerright"></div>
      </div>

      <div className="footer">
        <div className="sections">
          <div className="logodiv"></div>
          <div className="adddiv">
            <span>
              <ImLocation2 />
            </span>
            <div>
              {/* <div>Department of Mechanical Engineering,</div>
              <div>
                Zakir Husain College of Engineering and Technology,Aligarh
                Muslim University
              </div>

              <div>Aligarh,202002</div> */}
              <a
                target="_blank"
                href="https://www.google.com/maps/place/SAE+ZHCET+Collegiate+Club/@27.914843,78.077828,16z/data=!4m6!3m5!1s0x3974a4e343ce8411:0xf280c618d6604343!8m2!3d27.9148433!4d78.0778277!16s%2Fg%2F11b6j3ld50?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
                style={{
                  color: "white",
                  // textDecoration: "none",
                }}
              >
                Department of Mechanical Engineering,Zakir Husain College of
                Engineering and Technology,Aligarh Muslim
                UniversityAligarh,202002
              </a>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="headfooter">Explore</div>
          <div className="headlinks">
            <NavLink to="/zfr-cv" className="linktype">
              ZFR
            </NavLink>
            {/* <NavLink to='/zfr-ev' className='linktype' >ZFR Electric</NavLink> */}
            <NavLink to="/tgw" className="linktype">
              Team Green Warriors
            </NavLink>
            <NavLink to="/sponsors" className="linktype">
              Sponsors
            </NavLink>
            <NavLink to="/alumnis" className="linktype">
              Alumni
            </NavLink>
          </div>
        </div>
        <div className="sections">
          <div className="headfooter">Quick Links</div>
          <div className="headlinks">
            <NavLink to="/apply" className="linktype">
              Apply
            </NavLink>
            <NavLink to="/contact" className="linktype">
              Contact Us
            </NavLink>
            <NavLink to="/supportus" className="linktype">
              Support us
            </NavLink>
            <NavLink to="/governingboard" className="linktype">
              Members
            </NavLink>
            <NavLink to="/vision-mission" className="linktype">
              Vision-Mission
            </NavLink>
          </div>
        </div>
        <div className="sections follow">
          <div className="headfooter ">Follow Us</div>
          {show ? (
            <div className="twoinstas1">
              <div className="trainglee"></div>
              <div className="twoinstas">
                <div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/zhcet_formula_racing/?hl=en"
                    className="innerinsta"
                  >
                    <FaInstagramSquare />
                  </a>
                  <div className="linktext">ZFR-CV</div>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/team_green_warriors/?hl=en"
                    className="innerinsta"
                  >
                    <FaInstagramSquare />
                  </a>
                  <div className="linktext">TGW</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="footicons">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/sae-zhcet-collegiate-club/mycompany/"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://www.facebook.com/SAEZHCET/">
              <FaFacebookSquare />
            </a>
            <a className="insta" onClick={() => setIsShow((prev) => !prev)}>
              <FaInstagramSquare />
            </a>
            <a target="_blank" href="https://twitter.com/saezhcet">
              <FaTwitterSquare />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC5gHTXGgP0l3RRIGkJN-nhg"
            >
              <FaYoutube />
            </a>
          </div>

          <div className="headfooter" style={{ marginBottom: "7px" }}>
            Contact Us
          </div>
          <div className="contactdet">
            <div>
              <AiFillPhone style={{ marginRight: "8px", color: "#919191" }} />
              <span style={{ color: "#919191" }}>
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    textDecorationColor: "none",
                    color: "whitesmoke",
                  }}
                  href="tel: 91055 44186"
                >
                  +91 91055 44186
                </a>{" "}
                {/* <a
                  href="tel: 97200 06363"
                  style={{
                    textDecoration: "none",
                    textDecorationColor: "none",
                    color: "whitesmoke",
                  }}
                >
                  +91 97200 06363
                </a> */}
              </span>
            </div>
            <div>
              <FaEnvelope style={{ marginRight: "8px", color: "#919191" }} />
              <a
                target="_blank"
                href="mailto:sae@zhcet.ac.in"
                style={{ color: "whitesmoke" }}
              >
                sae@zhcet.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="developerdet">
        <span>Developed by Haisam khurshid</span>
        <a href="https://github.com/haisamk18">
          <span>
            <AiFillGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/haisam-khurshid/">
          <span>
            <AiFillLinkedin />
          </span>
        </a>
      </div>

      <div className="developerdet1">
        <span>Last Updated by Harsh Raja</span>
        <a target="_blank" href="https://github.com/harsh-code-ops">
          <span style={{ margin: "0 4px" }}>
            <AiFillGithub />
          </span>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/harsh-raja-8763a0290/"
        >
          <span style={{ margin: "0 4px" }}>
            <AiFillLinkedin />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
