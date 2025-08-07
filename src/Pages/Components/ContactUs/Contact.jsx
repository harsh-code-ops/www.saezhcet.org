import React, { useState, useEffect } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiLoaderCircle } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import Map from "./Map";
import axios from "axios";
import Swal from "sweetalert2";

import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Circles } from "react-loader-spinner";
import Success from "../Success & Error Notification/success";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const Swal = require("sweetalert2");
  useEffect(() => {
    AOS.init();
  }, []);
  const facebook = {
    color: "white",
  };
  const Linkedin = {
    color: "white",
  };
  const Insta = {
    color: "white",
  };
  const Twitter = {
    color: "white",
  };

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(null);

  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstName] = useState("");
  const [midname, setMidname] = useState("");
  const [lastname, setLastname] = useState("");

  const [success, setSuccess] = useState(false);

  const [namerror, setNameeror] = useState(false);
  const [phoneerr, setPhonerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [msgerr, setMsgerr] = useState(false);

  const [notvaliderr, setnotvaliderr] = useState(false);

  const [msgprocess, setmsgprocess] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const name = firstname + "" + midname + "" + lastname;

  const Send = async (e) => {
    e.preventDefault();

    let item = {
      name,
      subject,
      email,
      phone,

      message,
    };
    console.log("HI");

    if (name && email && phone && message) {
      setmsgprocess(true);
      axios
        .post("https://long-ruby-snapper-hose.cyclic.app/message", item)
        .then((res) => {
          console.log(res.data);
          Swal.fire(
            "Thank you!",
            "Your message has been successfully sent. We will contact you very soon!",
            "success"
          );
          setFirstName("");
          setMidname("");
          setLastname("");
          setSubject("");
          setPhone("");
          setMessage("");
          setEmail("");
          setmsgprocess(false);
        })
        .catch((err) => {
          console.log(err);
          setmsgprocess(false);
          Swal.fire(
            "Error!",
            "Please wait a few minutes before you try again.",
            "error"
          );
        });
    }
    if (name === "") {
      setNameeror(true);
    }
    if (phone === "") {
      setPhonerr(true);
    }
    if (email === "") {
      setEmailerr(true);
    }
    if (!isValidEmail(email)) {
      setnotvaliderr(true);
    }
    if (message === "") {
      setMsgerr(true);
    }
  };

  return (
    <div className="maincontactdiv">
      <div className="upperdivcontact">
        <div className="contactusheading">
          <div className="contitle">CONTACT US</div>
          <div className="lineborder"></div>
          <div className="condesc">
            Whether you have a question or like to get part of our team - this
            form will get you in contact with us!
          </div>
        </div>

        {success && (
          <div className="errconbox">
            {" "}
            <Success
              Hd="Thank you!"
              desc="Your message has been successfully sent. We will contact you very soon!"
            />{" "}
          </div>
        )}
      </div>
      <div
        className="maincontactinputdiv"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="inputleftdiv">
          <div className="msgtextheading">SEND US YOUR QUERY</div>

          <div className="inputinsideleft">
            <div className="name">
              <div className="labeldiv">
                <div className="labels">
                  {namerror ? (
                    <span className="errred">Name is required</span>
                  ) : (
                    "First Name"
                  )}
                </div>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (firstname.length > 0) {
                      setNameeror(false);
                    }
                  }}
                  value={firstname}
                />
              </div>
              <div className="labeldiv">
                <div className="labels">Middle Name</div>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setMidname(e.target.value);
                    if (midname.length > 0) {
                      setNameeror(false);
                    }
                  }}
                  value={midname}
                />
              </div>
              <div className="labeldiv">
                <div className="labels">Last Name</div>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setLastname(e.target.value);
                    if (lastname.length > 0) {
                      setNameeror(false);
                    }
                  }}
                  value={lastname}
                />
              </div>
            </div>

            <div className="emphone">
              <div className="labeldiv" id="email">
                <div className="labels">
                  {emailerr ? (
                    <span className="errred">Email is required</span>
                  ) : notvaliderr ? (
                    <span className="errred">Please enter a valid Email</span>
                  ) : (
                    "Email"
                  )}
                </div>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (email.length < 0) {
                      setnotvaliderr(false);
                      setEmailerr(true);
                    }

                    if (email.length > 0) {
                      setEmailerr(false);
                    }
                    if (email.length > 0 && isValidEmail(email)) {
                      setnotvaliderr(false);
                    }
                    if (email.length > 0 && !isValidEmail(email)) {
                      setnotvaliderr(true);
                    }
                  }}
                  value={email}
                />
              </div>

              <div className="labeldiv" id="phone">
                <div className="labels">
                  {phoneerr ? (
                    <span className="errred">Phone No. is required</span>
                  ) : (
                    "Phone"
                  )}
                </div>
                <input
                  type="text"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phone.length > 0) {
                      setPhonerr(false);
                    }
                  }}
                  value={phone}
                />
              </div>
            </div>

            <div className="labeldiv">
              <div className="labels">Subject</div>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setSubject(e.target.value);
                  setSuccess(false);
                }}
                value={subject}
              />
            </div>

            <div className="labeldiv">
              <div className="labels">
                {msgerr ? (
                  <span className="errred">This field is required</span>
                ) : (
                  "Message"
                )}
              </div>
              <textarea
                defaultValue={null}
                style={{ width: "100%", height: "100px" }}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (message.length > 0) {
                    setMsgerr(false);
                  }
                }}
                value={message}
              />
            </div>
            <div className="btndiv">
              <button className="btn1" type="submit" onClick={Send}>
                {msgprocess ? <BiLoaderCircle /> : "Send"}{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="textadressdiv">
          <div className="contactinfo">CONTACT INFORMATION</div>
          <div className="contacttexts">
            <div className="locationbox">
              <div className="symbols">
                <HiLocationMarker />
              </div>
              <div className="locationtexts">
                Department of Mechanical Engineering,Zakir Husain College of
                Engineering and Technology,Aligarh Muslim
                University,Aligarh,Uttar Pradesh-202002
              </div>
            </div>
            <div className="emailbox">
              <div className="symbols">
                <MdEmail />
              </div>
              <div className="emailtext">
                <a href="mailto: sae@zhcet.ac.in">sae@zhcet.ac.in</a>
              </div>
            </div>
            <div className="phonebox">
              <div className="symbols">
                <AiFillPhone />
              </div>
              <div className="phonenumber">
                <a href="tel: 91055 44186"> 91055 44186 </a>
                {/* <a href="tel: 97200 06363">, 97200 06363</a> */}
              </div>
            </div>
          </div>
          <div className="contactlinks">
            <a href="" className="facebook">
              <FontAwesomeIcon icon={faFacebook} style={facebook} size="2x" />
            </a>
            <a href="" className="linkedin">
              <FontAwesomeIcon icon={faLinkedin} style={Linkedin} size="2x" />
            </a>
            <a href="" className="twitter">
              <FontAwesomeIcon icon={faInstagram} style={Twitter} size="2x" />
            </a>
            <a href="" className="youtube">
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "white" }}
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="mapcon"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="mapconbg1"></div>
        <div className="mapconbg2"></div>
        <Map />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
