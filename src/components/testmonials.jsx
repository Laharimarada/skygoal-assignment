import React from "react";
import testmonial1 from "../assets/testmonial-1.svg";
import testmonial2 from "../assets/testmonial-2.svg";
import testmonial3 from "../assets/testmonial-3.svg";
const testmonials = () => {
  return (
    <div className="test">
      <p
        className="inter-400"
        style={{ fontSize: "40px", marginBottom: "30px", textAlign: "center" }}
      >
        Testimonials
      </p>
      <div className="testmonialbox">
        <div className="ppl">
          <div style={{ textAlign: "center" }}>
            <img src={testmonial1} alt="testmonial" />
            <div className="inter-600" style={{ fontSize: "16px" }}>
              Corey Korsgaard
            </div>
          </div>

          <div className="inter-400" style={{ textAlign: "center" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="ppl">
          <div style={{ textAlign: "center" }}>
            <img src={testmonial2} alt="testmonial2" />
            <div className="inter-600" style={{ fontSize: "16px" }}>
              Jakob Aminoff
            </div>
          </div>

          <div className="inter-400" style={{ textAlign: "center" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="ppl">
          <div style={{ textAlign: "center" }}>
            <img src={testmonial3} alt="testmonial3" />
            <div className="inter-600" style={{ fontSize: "16px" }}>
              Carla Press
            </div>
          </div>

          <div className="inter-400" style={{ textAlign: "center" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
      </div>
    </div>
  );
};
export default testmonials;
