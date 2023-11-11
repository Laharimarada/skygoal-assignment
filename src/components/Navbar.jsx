import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="nav-fix">
      <nav className="nav-bar">
        <div className="nav-first-group">
          <div>Home</div>
          <div>About</div>
          <div>Schedules</div>
          <div>Pricing</div>
        </div>
        <div className="nav-sec-group">
          <div style={{ color: "#7D7D7D" }}>Offers</div>
          <button className="btn-orange">Courses</button>
        </div>
        <div className="emptybox"></div>
        <div className="hamburger" onClick={() => setState(!state)}>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
        </div>
        <div className={"mobile-nav " + (state ? "flex" : "none")}>
          <div>Home</div>
          <div>About</div>
          <div>Schedules</div>
          <div>Pricing</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
