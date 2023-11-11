import React from "react";
import avatar1 from "../assets/avatar-1.svg";
import avatar2 from "../assets/avatar-2.svg";
import avatar3 from "../assets/avatar-3.svg";

const Sectiontwo = () => {
  return (
    <div className="section-two">
      <div className="section-cards">
        <div className="card">
          <div>
            <img src={avatar1} alt="avatar1" width="60px" />
          </div>
          <div>
            <p className="roboto-500">Jenny Wilson</p>
            <p className="roboto-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={avatar2} alt="avatar2" width="60px" />
          </div>
          <div>
            <p className="roboto-500">Jenny Wilson</p>
            <p className="roboto-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={avatar3} alt="avatar3" width="60px" />
          </div>
          <div>
            <p className="roboto-500">Jenny Wilson</p>
            <p className="roboto-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
      </div>
      <div className="section-two-sec-grp">
        <div>
          <div style={{ lineHeight: "35px" }}>
            <p className="inter-600" style={{ fontSize: "35px" }}>
              Tropical Adventure
            </p>
            <p className="inter-400" style={{ fontSize: "25px" }}>
              for Students.
            </p>
            <p className="inter-500" style={{ fontSize: "15px" }}>
              Student Tropical Vacation: Relax and Recharge
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
        <button className="btn-orange">Explore more</button>
      </div>
    </div>
  );
};

export default Sectiontwo;
