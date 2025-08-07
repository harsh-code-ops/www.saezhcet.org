import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Components/ContactUs/Contact.jsx";

import Footer from "./Pages/Components/Footer";
//import Caraousel from './Pages/Components/Caraousel';

import Teamspage from "./Pages/Teamspage";

//import TeamsPage from './Pages/Teamspage';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import VehiclePage from "./Pages/VehiclePage";

import Scrolltotop from "./Pages/Components/scrolltotop";

import Teams from "./Pages/Components/Homepage/Teams";
import Facultymessage from "./Pages/Components/Aboutus/Facultymessage";

import NeweventPage from "./Pages/Components/Events/Neweventpage";

import Sponsercontainer from "./Pages/Components/Sponser/Sponsercontainer";
import Navbar from "./Pages/Components/Navbar/idex";
import SupportUs from "./Pages/Components/Supportus/SupportUs";
import Success from "./Pages/Components/Success & Error Notification/success";

import AboutUs from "./Pages/AboutUs";
import Gallerypage from "./Pages/Components/Gallery/Gallerypage";
import { FaChevronUp } from "react-icons/fa";
import GallerymainPage from "./Pages/Components/Gallery/GallerymainPage";

import Logoscon from "./Pages/Components/Logoscon/Logoscon";

import Apply from "./Pages/Components/Applynew/Apply";
import Box from "./Pages/Components/Msgbox/Box";
import AlumniPage from "./Pages/AlumniPage";
import Newsletter from "./Pages/Components/Newsletter/Newsletter";
import Governingboard from "./Pages/Components/Aboutus/Governingboard";
//import Navbarnew from './Pages/Components/New Navbar/Navbarnew';
import Achievements from "./Pages/Components/Achievements/Achievements";
import Loader from "./Pages/Components/Loader/Loader";
import Error from "./Pages/Components/ErrorPage/Error";
import Downloads from "./Pages/Components/DownloadsPage/Downloads";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Logoscon />

          <Navbar />

          <button
            onClick={scrollToTop}
            style={{
              display: visible ? "flex" : "none",
              position: "fixed",
              padding: "9px 14px",
              fontSize: "16px",
              bottom: "20px",
              right: "20px",
              background: "#383838",
              color: "#fff",
              textAlign: "center",
              zIndex: "600000",
              borderStyle: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "revert-layer",
              justifyContent: "center",
              alignItems: "center",
              opacity: "0.8",
            }}
          >
            <FaChevronUp />
          </button>

          <Scrolltotop>
            <Routes>
              <Route exact path="*" element={<Error />} />
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/teams" element={<Teamspage />} />
              <Route
                exact
                path="/zfr-cv"
                element={
                  <Teamspage
                    Title="TEAM ZFR-CV"
                    Description="Something about Azfr-cv"
                    State="CV"
                  />
                }
              />
              <Route
                exact
                path="/zfr-ev"
                element={
                  <Teamspage
                    Title="TEAM ZFR-EV"
                    Description="Something about ZFR-EV"
                    State="EV"
                  />
                }
              />
              <Route
                exact
                path="/tgw"
                element={
                  <Teamspage
                    Title="TEAM GREEN WARRIORS"
                    Description="Something about TGW"
                    State="TGW"
                  />
                }
              />
              <Route
                exact
                path="/zfr-cv/1.0"
                element={
                  <VehiclePage
                    Img="zfr1.0..jpg"
                    id="zfr1.0"
                    Heading="ZFR 1.0"
                  />
                }
              />
              <Route
                exact
                path="/zfr-cv/2.0"
                element={
                  <VehiclePage Img="zfr2.0.jpg" id="zfr2.0" Heading="ZFR 2.0" />
                }
              />
              <Route
                exact
                path="/zfr-cv/3.0"
                element={
                  <VehiclePage Img="zfr3.0.jpg" id="zfr3.0" Heading="ZFR 3.0" />
                }
              />
              <Route
                exact
                path="/zfr-cv/4.0"
                element={
                  <VehiclePage Img="zfr4.0.jpg" id="zfr4.0" Heading="ZFR 4.0" />
                }
              />
              <Route
                exact
                path="/zfr-cv/5.0"
                element={
                  <VehiclePage Img="zfrbg.jpg" id="zfr5.0" Heading="ZFR 5.0" />
                }
              />
              <Route
                exact
                path="/zfr-ev/1.0"
                element={<VehiclePage id="zfrev1.0" />}
              />
              <Route
                exact
                path="/zfr-ev/2.0"
                element={<VehiclePage id="zfrev2.0" />}
              />
              <Route
                exact
                path="/zfr-ev/3.0"
                element={<VehiclePage id="zfrev3.0" />}
              />
              <Route
                exact
                path="/zfr-ev/4.0"
                element={<VehiclePage id="zfrev4.0" />}
              />
              <Route
                exact
                path="/zfr-ev/5.0"
                element={<VehiclePage id="zfrev5.0" />}
              />
              <Route
                exact
                path="/zfr-ev/6.0"
                element={<VehiclePage id="zfrev6.0" />}
              />
              <Route
                exact
                path="/tgw/9.0"
                element={
                  <VehiclePage
                    id="effi9.0"
                    Img="effi9.0.png"
                    Heading="JackDaw (TGW 9.0)"
                  />
                }
              />
              <Route
                exact
                path="/tgw/10.0"
                element={
                  <VehiclePage
                    id="effi10.0"
                    Img="effi10.0.jpg"
                    Heading="TGW 10.0"
                  />
                }
              />
              <Route exact path="/vision-mission" element={<AboutUs />} />
              <Route exact path="/foot" element={<Footer />} />
              <Route exact path="/box" element={<Box />} />
              <Route exact path="/tm" element={<Teams />} />
              <Route exact path="/facultymsg" element={<Facultymessage />} />
              <Route
                exact
                path="/governingboard"
                element={<Governingboard />}
              />
              <Route exact path="/achievements" element={<Achievements />} />
              <Route exact path="/event" element={<NeweventPage />} />
              <Route exact path="/apply" element={<Apply />} />
              <Route exact path="/sponsors" element={<Sponsercontainer />} />
              <Route exact path="/alumnis" element={<AlumniPage />} />
              <Route exact path="/downloads" element={<Downloads />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/supportus" element={<SupportUs />} />
              <Route exact path="/check" element={<Success />} />
              <Route exact path="/gallery" element={<GallerymainPage />} />
              <Route exact path="/downloads" element={<Newsletter />} />
              /* Gallery */
              <Route
                exact
                path="/gallery/Section0"
                element={
                  <Gallerypage id="Section0" name="Formula Bharat 2023" />
                }
              />
              <Route
                exact
                path="/gallery/Section1"
                element={
                  <Gallerypage id="Section1" name="Formula Imperial 2022" />
                }
              />
              <Route
                exact
                path="/gallery/Section2"
                element={<Gallerypage id="Section2" name="Alumni Meet 2022" />}
              />
              <Route
                exact
                path="/gallery/Section3"
                element={<Gallerypage id="Section3" name="NBA visit 2022" />}
              />
              <Route
                exact
                path="/gallery/Section4"
                element={
                  <Gallerypage
                    id="Section4"
                    name="Institute-Industry Meet 2022"
                  />
                }
              />
              <Route
                exact
                path="/gallery/Section5"
                element={<Gallerypage id="Section5" name="Auto Expo 2018" />}
              />
              <Route
                exact
                path="/gallery/Section6"
                element={<Gallerypage id="Section6" />}
              />
              <Route
                exact
                path="/gallery/Section7"
                element={<Gallerypage id="Section7" />}
              />
              <Route
                exact
                path="/gallery/Section8"
                element={<Gallerypage id="Section8" />}
              />
              /* ZFR- CV*/
              <Route
                exact
                path="/vehicle/zfrcv1.0"
                element={<VehiclePage id="zfr1.0" Heading="ZFR 1.0" />}
              />
            </Routes>
          </Scrolltotop>
        </div>
      )}
    </div>
  );
}

export default App;
