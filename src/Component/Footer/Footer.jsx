import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">
          <img alt="" src={Github} />
          <img src={instagram} alt="" />
          <img alt="" src={linkedin} />
        </div>
        <div className="logo-f">
          <img alt="" src={logo} />
        </div>
      </div>
      <div className=" blur blur-f-1"></div>
      <div className=" blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
