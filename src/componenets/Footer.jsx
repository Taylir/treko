import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";
import "./Footer.css";
import React from "react";
import logo from "../componenets/assets/logo-01.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--treko">
          <img src={logo} alt="" />
          <p>
            Here at Treko we strive to give you a website you can be proud to
            show your friends and family. As well as having the having the
            reliability of real human customer support!
          </p>
        </div>
        <div className="footer__top--company">
          <div className="footer__company-company">
            <h3>Company</h3>
            <div className="footer__companies">
              <a href="/">
                <p>About Us </p>
              </a>
              <a href="/">
                <p>Contact Us </p>
              </a>
              <a href="/">
                <p>Career </p>
              </a>
              <a href="/">
                <p>Advertising </p>
              </a>
            </div>
          </div>
          <div className="footer__company-resources">
            <h3>Resources</h3>
            <div className="footer__companies">
              <a href="/">
                <p>Our Blog </p>
              </a>
              <a href="/">
                <p>Help Center </p>
              </a>
              <a href="/">
                <p>Terms & Privacy </p>
              </a>
              <a href="/">
                <p>Site Map </p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__top--follow">
          <h3>Follow Us:</h3>
          <div className="footer__follows">
            <a href="/">
              <Facebook className="footer__facebook footer__follow-icon" />
            </a>
            <a href="/">
              <Twitter className="footer__twitter footer__follow-icon" />
            </a>
            <a href="/">
              <Google className="footer__google footer__follow-icon" />
            </a>
            <a href="/">
              <LinkedIn className="footer__linkedin footer__follow-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        © 2012 - 2023 Treko. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
