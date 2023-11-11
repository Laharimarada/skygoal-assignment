import React from "react";
import { useState } from "react";
import Bookingheroein from "../assets/booking-sec-heroein.svg";
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
          className="booking-heroein"
          alt="Booking-sec-heroein"
          style={{ display: "block" }}
        />
      </div>
      <div className="booking-card">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="roboto-900 " style={{ fontSize: "34px" }}>
            BOOK NOW
          </p>
          <p className="roboto-500" style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="form-gap">
          <div className="form-flex-col">
            <label className="roboto-500" style={{ fontSize: "14px" }}>
              CITY
            </label>
            <input
              type="text"
              placeholder="ENTER CITY"
              className="input-fields"
            />
          </div>
          <div className="form-flex-box">
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "14px" }}>
                ARRIVAL
              </label>
              <input
                type="text"
                className="input-fields"
                placeholder="ENTER TIME"
              />
            </div>
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "14px" }}>
                DEPARTURE
              </label>
              <input
                type="text"
                className="input-fields"
                placeholder="ENTER TIME"
              />
            </div>
          </div>
          <div className="form-flex-box">
            <div className="form-flex-col">
              <label className="roboto-500" style={{ fontSize: "14px" }}>
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
              <label className="roboto-500" style={{ fontSize: "14px" }}>
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
