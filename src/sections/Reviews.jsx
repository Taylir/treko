import React from "react";
import "./Reviews.css";
import review1 from "../componenets/assets/Alex.png";
import review2 from "../componenets/assets/Mariah.png";
import review3 from "../componenets/assets/Mark.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayArrow, Twitter } from "@mui/icons-material";

function Reviews() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="reviews">
      <div className="reviews__title">
        <h1>Loved by freelancers and agencies around the world.</h1>
        <p>
          From small bloggers to large companies aspiring to be the next amazon
          we are always looking to help and work with any one of anysize of
          business!
        </p>
      </div>
      <div className="reviews__twitter">
        <div className="twitter__card">
          <div className="twitter__user">
            <img src="https://i.pravatar.cc/100?img=1" alt="" />
            <div className="twitter__user-handle">
              <h2>Alice Waters</h2>
              <p>@WaterBlogger</p>
            </div>
            <Twitter />
          </div>
          <p>
            I needed to find my own place for my followers to see what I am up
            to and <span className="twitter--blue">@treko</span> built me a
            perfect place for us all!
          </p>
        </div>
        <div className="twitter__card">
          <div className="twitter__user">
            <img src="https://i.pravatar.cc/100?img=12" alt="" />
            <div className="twitter__user-handle">
              <h2>Gordon Wright</h2>
              <p>@Gwrighter37</p>
            </div>
            <Twitter />
          </div>
          <p>
            Being an up and coming writer I needed a place to talk to an
            audiance and <span className="twitter--blue">@treko</span> made that
            come true! I can't thank them enough.
          </p>
        </div>
        <div className="twitter__card">
          <div className="twitter__user">
            <img src="https://i.pravatar.cc/100?img=3" alt="" />
            <div className="twitter__user-handle">
              <h2>Alvin Nieck</h2>
              <p>@alvnikin</p>
            </div>
            <Twitter />
          </div>
          <p>
            I was looking for a place to train and support fellow gym bros and
            decided to make my own.{" "}
            <span className="twitter--blue">@treko</span> made that come true.
          </p>
        </div>
      </div>
      <div className="reviews__test--carousel">
        <Slider {...settings}>
          <img src={review1} alt="" />
          <img src={review2} alt="" />
          <img src={review3} alt="" />
        </Slider>
      </div>
      <a href="https://www.youtube.com/watch?v=X67_ecp6PC8" target="_blank" rel="noreferrer">
        <div className="reviews__video-ish">
          <PlayArrow />
        </div>
      </a>
    </div>
  );
}

export default Reviews;
