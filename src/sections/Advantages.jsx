import React from "react";
import "./Advantages.css";
import powerful from "../componenets/assets/powerful.svg";
import advertise from "../componenets/assets/advertise.svg";

export default function Advantages() {
  return (
    <div className="advantages">
      <div className="advantages__top">
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="advantages__top--left"
        >
          <div className="advantages__top-left--title">
            <h1>Take full advantage of powerful features</h1>
            <p>
              With all of the technologies and possible tools out there we have
              found the best methods and the best tools to make your website
              look and feel ahead of the compition.
            </p>
            <h3>Features Never Stop</h3>
          </div>
          <div>
            <ul className="advantages__top-left--points">
              <li>
                {" "}
                With smooth interfaces to nice, clean, and professional feeling
                pages you will always find your self scrolling through your
                websites seeing what it has to offer.
              </li>
              <li>
                {" "}
                You will feel like you are standing out from the crowd living in
                the 22nd centurary while others will still have fossils for a
                website.
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="advantages__top--right"
        >
          <img src={powerful} alt="" />
        </div>
      </div>

      <div className="advantages__bottom">
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="advantages__bottom--left"
        >
          <img src={advertise} alt="" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="advantages__bottom--right"
        >
          <div className="advantages__bottom--right-points">
            <div className="advantages__bottom--right-point">
              <h2>1. Website Development</h2>
              <p>
                Starting from templates we will see what you like the most in
                terms of style and wants, and after you decide we will build it
                from the ground up making sure it's exactly what your want!
              </p>
            </div>
            <div className="advantages__bottom--right-point">
              <h2>2. Website Promotion</h2>
              <p>
                Not only will the website look and feel amazing but using SEO
                terms and functionality it will be recomended to more web
                surfers and social media gurus that will drive traffic to your
                website way up!
              </p>
            </div>
            <div className="advantages__bottom--right-point">
              <h2>3. Contexual Advertising</h2>
              <p>
                With the previous actions as well if people are looking for a
                topic closley related to yours. Over time your own website will
                get recomneded more and more to those people making sure people
                who you want to see it will.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
