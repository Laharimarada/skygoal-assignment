import React from "react";

const Footer = () => {
  return (
    <div className="footer-sec">
      <div
        style={{ textAlign: "center", fontSize: "40px", maxWidth: "700px" }}
        className="inter-600"
      >
        <p>Student Special: Discounted rates on tropical getaways!</p>
      </div>
      <div
        style={{ textAlign: "center", fontSize: "15px", maxWidth: "600px" }}
        className="inter-400"
      >
        <p>
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>
      <div className="footer-links">
        <div className="links-first-grp inter-400">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Sales and Refunds</p>
          <p>Legal</p>
        </div>
        <div className="links-sec-grp inter-600">
          <p>About</p>
          <p>Schedules</p>
          <p>Pricings</p>
          <p>Membership</p>
          <p>Joins</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
