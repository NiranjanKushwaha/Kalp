import React from "react";
import home from "../assets/home-office.png";
import save from "../assets/save-as.png";
import location from "../assets/wifi-location.png";
import rupees from "../assets/rupee-sign.png";
import policeman from "../assets/policeman.png";
const PriceLocation = () => {
  return (
    <div className="price-location">
        <div className="middle">
          <div>
            <img src={save} alt="home" className="middle-img hvr-pulse-grow" />
          </div>
          <div>Status: Launching soon</div>
        </div>
        <div className="middle">
          <div>
            <img src={location} alt="" className="middle-img hvr-pulse-grow" />
          </div>
          <div>Location: Sanath Nagar, Hyderabad</div>
        </div>
        <div className="middle">
          <div>
            <img src={home} alt="" className="middle-img hvr-pulse-grow" />
          </div>
          <div>Price: 2 BHK – 1.05 Cr. 3 BHK – 1.24 Cr. (All Incl.) onw.</div>
        </div>
        <div className="middle">
          <div>
            <img src={rupees} alt="" className="middle-img hvr-pulse-grow" />
          </div>
          <div> Possession: Launching soon</div>
        </div>
        <div className="middle">
          <div>
            <img src={policeman} alt="" className="middle-img hvr-pulse-grow" />
          </div>
          <div>Typology: 2 BHK, 3 BHK</div>
        </div>
    </div>
  );
};

export default PriceLocation;
