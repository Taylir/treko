import React from "react";
import "./Moreinfo.css";
import img1 from "./assets/user-1.png";
import img2 from "./assets/browser-5.png";
import img3 from "./assets/management.png";
import img4 from "./assets/analytics-4.png";

export default function Moreinfo() {
  return (
    <div className="moreinfo">
      <div className="moreinfo__topics">
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="moreinfo__topic"
        >
          <img src={img1} alt="" />
          <p>
            User customizablity as well as user specific collections recomended
            daily.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="moreinfo__topic"
        >
          <img src={img2} alt="" />
          <p>
            Always on a safe and secure network so no information will ever get
            into wrong hands
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="moreinfo__topic"
        >
          <img src={img3} alt="" />
          <p>
            Able to be used on your phone, tablet or desktop for on the go monitoring or changes.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="moreinfo__topic"
        >
          <img src={img4} alt="" />
          <p>
            Live statistics of traffic and other statistics you would want to see up front!
          </p>
        </div>
      </div>
    </div>
  );
}
