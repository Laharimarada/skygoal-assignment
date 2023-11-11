import React from "react";
import Heroein from "../assets/heroein.svg";

const Discounts = () => {
  return (
    <div className="discounts-sec">
      <div className="section-two-sec-grp">
        <div>
          <div style={{ lineHeight: "35px" }}>
            <p className="inter-500" style={{ fontSize: "15px" }}>
              Get 20% off for student
            </p>
            <p className="inter-600" style={{ fontSize: "35px" }}>
              Student discounts available.
            </p>
            <p className="inter-400" style={{ fontSize: "25px" }}>
              Get ready for some fun in the sun!
            </p>
          </div>
          <ul
            className="inter-400"
            style={{ fontSize: "12px", marginLeft: "20px", lineHeight: "22px" }}
          >
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
        </div>
        <button className="btn-orange inter-600">Explore more</button>
      </div>
      <div>
        <img
          src={Heroein}
          alt="discounts-heroein"
          style={{ display: "block", width: "300px" }}
        />
      </div>
    </div>
  );
};

export default Discounts;
