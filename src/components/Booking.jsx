import React from "react";
import { useState } from "react";
import Bookingheroein from "../assets/Booking-sec-heroein.svg";
const Booking = () => {
  const [star, setStar] = useState(0);
  const [room, setRoom] = useState(0);
  const starinc = () => {
    setStar(star + 1);
  };
  const stardec = () => {
    setStar(star - 1);
  };
  const roominc = () => {
    setRoom(room + 1);
  };
  const roomdec = () => {
    setRoom(room - 1);
  };
  return (
    <div className="booking-sec">
      <div>
        <img
          src={Bookingheroein}
          alt="Booking-sec-heroein"
          style={{ display: "block", width: "400px" }}
        />
      </div>
      <div className="booking-card">
        <p className="roboto-900 " style={{ fontSize: "32px" }}>
          Book now
        </p>
        <p className="roboto-400" style={{ fontSize: "12px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className="form-gap">
          <div className="form-flex-col">
            <label className="roboto-500" style={{ fontSize: "12px" }}>
              CITY
            </label>
            <input type="text" placeholder="City" className="input-fields" />
          </div>
          <div className="form-flex-box">
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "12px" }}>
                ARRIVAL
              </label>
              <input type="text" className="input-fields" />
            </div>
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "12px" }}>
                DEPARTURE
              </label>
              <input type="text" className="input-fields" />
            </div>
          </div>
          <div className="form-flex-box">
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "12px" }}>
                STAR
              </label>
              {/* <input type="text" className="input-fields"/> */}
              <div className="">
                <button
                  style={{
                    padding: "10px 10px",
                    fontWeight: "900",
                  }}
                  onClick={() => stardec()}
                >
                  -
                </button>
                <span style={{ padding: "10px 10px" }}>{star}</span>
                <button
                  style={{ padding: "10px 10px", fontWeight: "900" }}
                  onClick={() => starinc()}
                >
                  +
                </button>
              </div>
            </div>
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "12px" }}>
                ROOM
              </label>
              <div>
                <button
                  style={{ padding: "10px 10px", fontWeight: "900" }}
                  onClick={() => roomdec()}
                >
                  -
                </button>
                <span style={{ padding: "10px 10px" }}>{room}</span>
                <button
                  style={{ padding: "10px 10px", fontWeight: "900" }}
                  onClick={() => roominc()}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="roboto-700 book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Booking;
