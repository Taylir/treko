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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, assumenda?
            </p>
            <p>
              <span className="date-time">Jan, 2023 - 12 min read</span>
            </p>
          </div>
          <div className="most-popular__item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, assumenda?
            </p>
            <p>
              <span className="date-time">Jan, 2023 - 12 min read</span>
            </p>
          </div>
          <div className="most-popular__item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, assumenda?
            </p>
            <p>
              <span className="date-time">Jan, 2023 - 12 min read</span>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, maxime
            blanditiis dolore odit ducimus laboriosam?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, assumenda?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, assumenda?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, assumenda?
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
