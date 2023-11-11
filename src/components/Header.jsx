import React from "react";
import Headerboy from "../assets/header-boy.svg";
import Shape1 from "../assets/shapes/eclipse1.svg";
import Shape2 from "../assets/shapes/eclipse2.svg";
import oneforthdisc from "../assets/shapes/oneforthdisc.svg";
import secdisc from "../assets/shapes/secdisc.svg";
import circle from "../assets/shapes/circle.svg";

const Header = () => {
  return (
    <div className="background-col">
      <div className="header-sec">
        <div className="header-sec-first-grp">
          {/* <img src={Shape1} alt="eclipse1" className="shp1" /> */}
          <img src={Shape2} alt="eclipse2" className="shp2" />
          <img src={oneforthdisc} alt="disc" className="shp3" />
          <div style={{ lineHeight: "70px" }}>
            <p className="inter-600" style={{ fontSize: "20px" }}>
              Discover the beauty of the tropics
            </p>
            <p className="poppins-700">Tropical</p>
            <p className="poppins-700">Destinations</p>
            <p className="poppins-500">For Students</p>
          </div>
          <div>
            <p className="inter-400" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
              bibendum integer rutrum nisi. A nec nisl vitae
            </p>
          </div>
          <div className="emptybox"></div>
          <button className="inter-600 btn-orange">SIGN UP</button>
        </div>
        <div style={{ position: "relative" }}>
          <img src={secdisc} alt="secdisc" className="shp4" />
          <img src={circle} alt="circle" className="shp5" />
          <img src={Headerboy} alt="boy" width="300px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
