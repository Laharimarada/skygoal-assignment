import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-first-group">
        <div>Home</div>
        <div>About</div>
        <div>Schedules</div>
        <div>Pricing</div>
      </div>
      <div className="nav-sec-group">
        <div>Offers</div>
        <button className="btn-orange">Courses</button>
      </div>
      <div className="emptybox"></div>  
      <div className="hamburger">
        <div className="ham-line"></div>
        <div className="ham-line"></div>
        <div className="ham-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
