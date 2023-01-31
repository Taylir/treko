import React from "react";
import "./Landing.css";
import img1 from "../componenets/assets/creativity.png";
import img2 from "../componenets/assets/manufacturing.png";
import img3 from "../componenets/assets/analytics-5.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  AOS.init();
  return (
    <div className="landing">
      <div className="landing__landing-background"></div>
      <div className="landing__title">
        <h1>
          Powerful landing page templates for Software, Businesses or Apps
        </h1>
        <p>
          We strive to create the best Landing page possible for your companies
          needs to attract attention and traffic to your website!
        </p>
        <button className="landing__button btn btn-green">
          Get Started Now
        </button>
        <button className="landing__button btn btn-blue">
          Take A Quick Tour
        </button>
        <div className="landing__boxes">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="landing__box"
          >
            <img src={img1} alt="" />
            <h3>Enhance your website design with Treko</h3>
            <p>
              With Trekos Trained Team and Analysts, we are always one step
              ahead of the competition. Keeping up with the newest and greatest
              tech avaialable we are alwasys going to be giving you the best
              possible site on the market.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="landing__box"
          >
            <img src={img2} alt="" />
            <h3>Enhance your website design with Treko</h3>
            <p>
              Not only are the landings we make for you stylish but also
              extremely effecient and easy to use. Allowing any user to easily
              navigate through out your page driving up user interaction and
              creating recurring users.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="landing__box"
          >
            <img src={img3} alt="" />
            <h3>Enhance your website design with Treko</h3>
            <p>
              And with a fraction of the cost of anyone else you may find, we
              manage to keep your pockets full and your website stylish. With a
              main goal of keeping your website enjoyable and easy for anyone to
              use.
            </p>
          </div>
        </div>
      </div>
      <div className="landing_bottom-cutoff"></div>
    </div>
  );
}
