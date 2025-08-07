import React, { useEffect } from "react";
import Vehiclecard from "../Vehiclecard";
import DataEV from "./vehicledataEV.js";
import "./vehiclecontainerev.css";
import AOS from "aos";
import "aos/dist/aos.css";

function VehiclecontainerEV() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="vehiclemainevcontainer"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="teampageevheading">OUR VEHICLES</div>
      <div className="vehcilesconev">
        {DataEV.map((item) => {
          return (
            <Vehiclecard
              Name={item.Title}
              Description={item.Desc}
              Route={item.id}
              Img={item.Image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default VehiclecontainerEV;
