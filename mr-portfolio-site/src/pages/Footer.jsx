import React from "react";
import "./Footer.css";
import { BsTwitterX, BsFacebook, BsInstagram, BsSkype, BsLinkedin, BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <h3 className="sitename">Srikanth s</h3>
          <p>
           Let's connect and create something great together. I'm always open to new ideas and collaborations.
          </p>
          <div className="social-links d-flex justify-content-center">
            <a href="#"><BsTwitterX /></a>
            <a href="#"><BsFacebook /></a>
            <a href="#"><BsInstagram /></a>
            <a href="#"><BsLinkedin /></a>
          </div>
          <div className="container">
            <div className="copyright">
              <span>Copyright</span>{" "}
              <strong className="px-1 sitename">srikanth</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
            <div className="credits">
              Designed by{" "}
              <a href="#">Srikanth</a> using {" "}
              <a href="#">React</a>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <BsArrowUpShort />
      </a>

      <div id="preloader"></div>
    </>
  );
};

export default Footer;
