import React from "react";
import harvard from "../assets/harvard.svg";
import oxford from "../assets/oxford.svg";
import stanford from "../assets/stanford.svg";
import nanyangung from "../assets/nanyangung.svg";

const Destinations = () => {
  return (
    <div className="destinations-container">
      <p
        className="inter-500"
        style={{ fontSize: "40px", marginBottom: "30px" }}
      >
        Our Destinations
      </p>
      <div className="destinations-sec">
        <div>
          <div>
            <img src={harvard} alt="harvard university" />
          </div>
          <div className="dest-card-data">
            <p className="roboto-900">Harvard University</p>
            <div>
              <p className="roboto-500">Cambridge, Massachusetts, UK</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={oxford} alt="oxford university" />
          </div>
          <div className="dest-card-data">
            <p className="roboto-900">Oxford University</p>
            <div>
              <p className="roboto-500">Oxford, England</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={stanford} alt="stanford university" />
          </div>
          <div className="dest-card-data">
            <p className="roboto-900">Stanford University</p>
            <div>
              <p className="roboto-500">Stanford, California</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={nanyangung} alt="nanyangung university" />
          </div>
          <div className="dest-card-data">
            <p className="roboto-900">Nanyangung University</p>
            <div>
              <p className="roboto-500">Nanyang Ave, Singapura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
