import { Check, KeyboardArrowRightRounded } from "@mui/icons-material";
import React from "react";
import "./Cardlanding.css";
import goodUI from "../componenets/assets/ui background.svg";
import logo1 from "../componenets/assets/HTML5_Badge.png";
import logo2 from "../componenets/assets/badge-css-3-512.webp";
import logo3 from "../componenets/assets/JS.png";
import logo4 from "../componenets/assets/php.png";
import logo5 from "../componenets/assets/chimp.png";

export default function Cardlanding() {
  return (
    <div id="card-landing">
      <div className="card-landing__top-half">
        <p>
          {" "}
          Here at Treko we have some of the best options, plans, and teams any
          one could ask for. Providing current and up to date designs as well as
          the newest and best user interfaces you could ask for.
          <br />
          See just what we can do for you below.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="card-landing__top-bullets"
        >
          <div className="card-landing__bullet">
            <Check className="card-landing__checkmark" />
            <p>
              The ability to change the lay out and color scheme of any page at
              anytime you want.
            </p>
          </div>
          <div className="card-landing__bullet">
            <Check className="card-landing__checkmark" />
            <p>
              A secure and informative user database with all your information,
              from traffic to your website to most interacted with article.
            </p>
          </div>
          <div className="card-landing__bullet">
            <Check className="card-landing__checkmark" />
            <p>
              Your own team that will be working on your site and keeping it
              maintained with the ability to contact them.
            </p>
          </div>
          <div className="card-landing__bullet">
            <Check className="card-landing__checkmark" />
            <p>
              Flexible and abundant plans based on the type of website you need
              as well as different payment plans and methods.
            </p>
          </div>
          <div className="card-landing__bullet">
            <Check className="card-landing__checkmark" />
            <p>
              Ability to update your website in a matter of hours vs a matter of
              weeks or days with other competitors.
            </p>
          </div>
          <div className="card-landing__bullet">
            <Check className="card-landing__checkmark" />
            <p>
              And so much more that you will have to check out what we can do
              for you just to see all that we can offer you!
            </p>
          </div>
        </div>
      </div>
      <div className="card-landing__bottom-half">
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="card-landing__left-title"
        >
          <h1>Enhance your website with Treko</h1>
          <div className="card-landing__left-descriptors">
            <div className="card-landing__left-descriptor">
              <KeyboardArrowRightRounded />
              <p>
                With the Building blocks of HTML5, CSS3, and Java Script we are
                able to build the foundation to any great websit your users will
                love!
              </p>
            </div>
            <div className="card-landing__left-descriptor">
              <KeyboardArrowRightRounded />
              <p>
                Having PHP as part of our technologies not only are we able to
                build any format you want but any kind of tool or application
                you want can also come to fruition.
              </p>
            </div>
            <div className="card-landing__left-descriptor">
              <KeyboardArrowRightRounded />
              <p>
                And with mailchimp we an even create a interactive mail system for your users drawing them back to the website with deals or coupons to help a more e-commerce based site.
              </p>
            </div>
          </div>
          <div className="card-landing__left--tech">
            <h3>Technologies We Use:</h3>
            <div className="card-landing__left--tech-imgs">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="card-landing__right-img"
        >
          <img src={goodUI} alt="" />
        </div>
      </div>
    </div>
  );
}
