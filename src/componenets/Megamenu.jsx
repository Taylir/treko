import React from "react";
import "./Megamenu.css";
import imgLarge from "./assets/750x450.webp";
import imgSmall1 from "./assets/img1 ui-ux.webp";
import imgSmall2 from "./assets/img2 ui-ux.webp";
import imgSmall3 from "./assets/img3 ui-ux.webp";

export default function Megamenu() {
  return (
    <div className="megamenu">
      <div className="mega-menu__most-popular">
        <h3>MOST POPULAR POSTS:</h3>
        <div className="most-popular__items">
          <div className="most-popular__item">
            <p>
              React is still one of the most used by both businesses and ...
            </p>
            <p>
              <span className="date-time">Feb, 2023 - 14 min read</span>
            </p>
          </div>
          <div className="most-popular__item">
            <p>
              Now with the new stacks of code from next to native becoming
              fullstack...
            </p>
            <p>
              <span className="date-time">Jan, 2023 - 4 min read</span>
            </p>
          </div>
          <div className="most-popular__item">
            <p>
              Google has been at the top of browsers when it comes to features
              and now...
            </p>
            <p>
              <span className="date-time">Jan, 2023 - 8 min read</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mega-menu__featured-news">
        <h3>FEATURED NEWS:</h3>
        <img src={imgLarge} alt="" />
        <div className="featured__description">
          <h2>Is Glass the style of 2023?</h2>
          <p>
            Last year with a bunch of moving pieces it might be time for a new
            year new format that people love so why not a futuristic glass
            theme? Feeling like the future we ...
          </p>
        </div>
      </div>
      <div className="mega-menu__latest-news">
        <h3>LATEST NEWS:</h3>
        <div className="latest-news__items">
          <div className="latest-news__item">
            <img src={imgSmall1} alt="" />
            <div className="mega-drop__latest-description">
              <p>
                UI/UX is still loved but so many websites are still lacking in
                the new world of technology.
              </p>
              <p>
                <span className="date-time">Jan, 2023 - 12 min read</span>
              </p>
            </div>
          </div>
          <div className="latest-news__item">
            <img src={imgSmall2} alt="" />
            <div className="mega-drop__latest-description">
              <p>
                Different tools are wanted more and more as users see what else
                is out there that can be made.
              </p>
              <p>
                <span className="date-time">Jan, 2023 - 12 min read</span>
              </p>
            </div>
          </div>
          <div className="latest-news__item">
            <img src={imgSmall3} alt="" />
            <div className="mega-drop__latest-description">
              <p>
                Installing new updates are not always good sometimes it could
                make things run slower even.
              </p>
              <p>
                <span className="date-time">Jan, 2023 - 12 min read</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
