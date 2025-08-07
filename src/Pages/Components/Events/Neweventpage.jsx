import React, { useEffect } from "react";
import "./neweventpage.css";
import Footer from "../Footer";
import Routecomp from "../RouteComp/Routecomp";
import AOS from "aos";
import "aos/dist/aos.css";

const Neweventpage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="eventmaindiv">
      <div>
        <Routecomp
          Heading="Events that we Participate in"
          LastRoutename="Events"
        />
      </div>
      <div
        className="eventcontainers fb"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="eventconhead">
          <div className="titleventtype">FORMULA BHARAT</div>
          <div className="punchlineeventtype">
            Accelerating Innovation, Racing Towards Excellence.
          </div>
        </div>

        <div className="eventcondesc">
          <div className="desctextevent">
            Formula Bharat is an engineering design competition in which
            students from colleges and universities all over the country compete
            with a life-size Formula-style vehicle in areas of engineering
            design, overall cost, marketability, and dynamic performance. The
            series replicates the global student Formula series hosted in
            approximately 11 countries per year. On the day of the competition,
            the teams present their projects to the judges, as well as
            demonstrate their technical solutions on the racetrack by competing
            in various static and dynamic events.
          </div>
          <div className="eventlinkbtn">
            <a
              target="_blank"
              className="btnevent"
              href="https://www.formulabharat.com/"
            >
              Learn More..
            </a>
          </div>
        </div>

        <div
          className="iframeevents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/309IUAqnj38"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        className="eventcontainers fbelec"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="eventconhead">
          <div className="titleventtype">FORMULA BHARAT ELECTRIC/PI-EV</div>
          <div className="punchlineeventtype">
            Engineer your future with us!
          </div>
        </div>

        <div className="eventcondesc">
          <div className="desctexteventEventd">
            Pi-EV was developed around the premise to challenge engineering
            students on the design of the powertrain system of an electric
            vehicle, as per the Formula Student guidelines. Student teams engage
            in a knowledge-building exercise that tests their engineering design
            methodologies, team management strategies, procurement strategies
            and software integration principles. This mini-challenge is a
            sub-event of the Formula Bharat student competition, which is an
            annual platform that is dedicated to promoting hands-on practical
            engineering skills through engaging students in the design, build,
            and testing of a life-size Formula-style vehicle.
          </div>
          <div className="eventlinkbtn">
            <a
              target="_blank"
              className="btnevent"
              href="https://www.formulabharat.com/tag/electric/"
            >
              Learn More..
            </a>
          </div>
        </div>
      </div>

      <div
        className="eventcontainers effi"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="eventconhead">
          <div className="titleventtype">SAE-NIS EFFICYCLE</div>
          <div className="punchlineeventtype">
            Eco-Innovation in Every Revolving Wheel.
          </div>
        </div>

        <div className="eventcondesc">
          <div className="desctextevent">
            Efficycle is an intercollegiate design competition which is intended
            to engage engineering students in developing the eco-friendly future
            mobility solutions for India. The event gives participant a
            challenge of conceptualizing, designing and fabricating a 3-wheeled,
            2-seater vehicle. In 2022 competition, the fully electric variant is
            introduced under advanced format. Hence the vehicle may be provided
            either with a hybrid drivetrain (human power + electric power) or a
            fully electric powertrain.
          </div>
          <div className="eventlinkbtn">
            <a
              target="_blank"
              className="btnevent"
              href="https://effi.saenis.org/"
            >
              Learn More..
            </a>
          </div>
        </div>
      </div>

      <div
        className="eventcontainers baja"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="eventconhead">
          <div className="titleventtype"> Formula Imperial</div>
          <div className="punchlineeventtype">
            Conquer the Terrain, Ignite the Thrill.
          </div>
        </div>

        <div className="eventcondesc">
          <div className="desctextevent">
            Formula Imperial is an Indian Formula Student Engineering Design
            Competition in which students from engineering institutes and
            universities all over the Globe, compete with a life-size
            formula-style vehicle in areas of engineering design, overall cost,
            marketability and dynamic performance. It is first to start Formula
            Student Hybrid Electric in India’. The aim of the competition is to
            provide platform to students for gaining the hands-on practical
            experience, while applying engineering theories studied in the
            classroom. In addition, students learn the art of management and
            teamwork, which are essential skills required in the ‘real-world’.
            These student teams are required to build a new vehicle from scratch
            year-after-year and seek sponsorship and donations by their own
            means to fund the project.
          </div>
          <div className="eventlinkbtn">
            <a
              target="_blank"
              className="btnevent"
              href="https://formulaimperial.com/"
            >
              Learn More..
            </a>
          </div>
        </div>

        <div
          className="iframeevents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/37B6_jQmuOc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Neweventpage;
