import React from "react";
import "./Different.css";
import img1 from "../componenets/assets/wireframe.png";
import img2 from "../componenets/assets/pantone.png";
import img3 from "../componenets/assets/folder.png";
import img4 from "../componenets/assets/cloud-2.png";
import img5 from "../componenets/assets/browser-15.png";
import img6 from "../componenets/assets/sitemap.png";
import img7 from "../componenets/assets/work.png";
import img8 from "../componenets/assets/analytics-7.png";
import team from "./assets/team.svg";
import { CheckCircle } from "@mui/icons-material";

export default function Different() {
  return (
    <div className="different">
      <div className="different__top-half">
        <h1>What Makes Treko Different</h1>
        <p>
          With all sorts of different website companies or builders out there
          what makes us so special compared to the rest? Well no need to guess,
          we'll tell you!
        </p>
        <div className="different__top-examples">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img1} alt="" />
            <p>
              Depedning on the package even at the most basic level we have a
              very user friendly plug and play system that lets you add whatever
              you want, where ever you want!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img2} alt="" />
            <p>
              Even if you are not able to come up with your own color pallate
              for your website we offer many to chose from to help get you
              started chosing a theme!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img3} alt="" />
            <p>
              We also include a local storage so if you have the need to save
              photos for commonly changing products or for the holiday season
              you can save it right in your user dashboard!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img4} alt="" />
            <p>
              With an easy cloud system, you can hook up different websites,
              pages, or even videos to seamlessly traverse to each one.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img5} alt="" />
            <p>
              Having a dynamic web page that is able to be viewed on any devices
              also helps more users visit your page and enjoy being there. We
              care about the mobile users just as much as the desktop users!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img6} alt="" />
            <p>
              We also have the ability to integrate a live chat server with
              users on the site allowing them to contact you immediatly if they
              have any questions.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img7} alt="" />
            <p>
              We also offer a storage server for you to use for files,
              passwords, or any other kind of information that only you will be
              able to access!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="different__top-example"
          >
            <img src={img8} alt="" />
            <p>
              As well as an easy to read and use progress chart letting you
              track users, profits, returning users, purchases and just about
              anything other statistic you would want!
            </p>
          </div>
        </div>
      </div>
      <div className="different__bottom-half">
        <div className="different__background--wrapper">
          <div className="different__background"></div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="different__bottom-left"
        >
          <img src={team} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="different__bottom-right"
        >
          <h1>We are making design better for everyone</h1>
          <div className="different__bottom-right--subs">
            <div className="bottom-right__subs">
              <div className="check-circle">
                <CheckCircle />
              </div>
              <p>
                From a complete novice to a google web developer, we offer
                packages any one could benifit from and would enjoy using!
              </p>
            </div>
            <div className="bottom-right__subs">
              <div className="check-circle">
                <CheckCircle />
              </div>
              <p>
                Even if you have no idea where to start or worried it might be
                over whelming just know that we are here to make that process go
                smoothly and seamlessly to get you up and running!
              </p>
            </div>
            <div className="bottom-right__subs">
              <div className="check-circle">
                <CheckCircle />
              </div>
              <p>
                With a team having your back and a dream you wanted to have on
                the internet, we can help you realize that dream and so much
                more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
