import React, { useEffect } from "react";
import "./Navbar.css";
import logoWhite from "./assets/logo-white.png";
import logo from "./assets/logo-01.png";
import { ArrowDropDownRounded } from "@mui/icons-material";
import Dropdown from "./Dropdown";
import Megamenu from "./Megamenu";

export default function Navbar({ scroll }) {
  const navItems = document.querySelector(".nav__list-items");

  useEffect(() => {
    if (navItems) {
      if (scroll) {
        navItems.classList += " scroll-theme";
      } else {
        navItems.classList.remove("scroll-theme");
      }
    }
  }, [scroll, navItems]);

  return (
    <div className={scroll ? "scroll-navbar" : "navbar"}>
      <nav className="nav__navbar">
        <div className="nav__left">
          <img src={scroll ? logo : logoWhite} alt="" />
        </div>
        <div className="nav__right">
          <ul className="nav__list-items">
            <li className="nav__list-item">
              <a href="/">
                About <ArrowDropDownRounded />
              </a>
              <div className="nav__drop-down">
                <Dropdown
                  option1={"Best Solution"}
                  option2={"Integrations"}
                  option3={"Why Treko"}
                  option4={"How It Works"}
                  option5={"Watch The Video"}
                />
              </div>
            </li>
            <li className="nav__list-item">
              <a href="/">Services</a>
            </li>
            <li className="nav__list-item">
              <a href="/">
                Pages <ArrowDropDownRounded />
              </a>
              <div className="nav__drop-down">
                <Dropdown
                  option1={"About Treko"}
                  option2={"Core Services"}
                  option3={"Meet The Team"}
                  option4={"Pricing Plans"}
                  option5={"Terms & Privacy"}
                  option6={"FAQs"}
                  option7={"Blog Listing"}
                  option8={"Single Post"}
                  option9={"Contact Us"}
                />
              </div>
            </li>
            <li className="nav__list-item">
              <a href="/">
                Mega Menu <ArrowDropDownRounded />
              </a>
              <div className="nav__mega-menu">
                <Megamenu />
              </div>
            </li>
            <li className="nav__list-item">
              <a href="/">Reviews</a>
            </li>
            <li className="nav__list-item">
              <a href="/">FAQs</a>
            </li>
            <li className="nav__list-item">
              <a href="/">Buy For $15</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
