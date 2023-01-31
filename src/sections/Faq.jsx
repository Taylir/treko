import { CheckRounded } from "@mui/icons-material";
import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq">
      <div className="faq__top">
        <div className="faq__top--title">
          <h1>Have Questions? Look Here.</h1>
          <p>
            We understand there is a lot to unpack and we are happy to help and
            answer any questions you might have!
          </p>
        </div>
        <div className="faq__top--bullets">
          <div className="faq__top--bullet">
            <h3>1. Getting started with Treko</h3>
            <p>
              Getting started is really simple! Just below here enter your
              e-mail address and we will email you shortly after to see what it
              is you are looking for and get you started on the path you want!
            </p>
          </div>
          <div className="faq__top--bullet">
            <h3>2. Do you have a free trial?</h3>
            <p>
              Every one gets a 14 day free trial! During those 14 days you will
              be able to use our whole platform and even if you buy it before
              the 14 days is up we will still give you the remaing days for free
              if you decide to sign up!
            </p>
          </div>
          <div className="faq__top--bullet">
            <h3>3. How to sign up for a Treko account?</h3>
            <p>
              After you contact us and we discuss what it is that you are
              looking for we will give you a special link that will take you to
              the creator dashboard and let you sign in there!
            </p>
          </div>
          <div className="faq__top--bullet">
            <h3>4. How to manage my account?</h3>
            <p>
              Once sign up has been completed and you created your password, the
              dashboard will give you access to your personal Treko team as well
              as your website to see live updates and whats happeneing. Here is
              where you would edit your information!
            </p>
          </div>
          <div className="faq__top--bullet">
            <h3>5. I have an issue with my account</h3>
            <p>
              If you have an issue feel free to talk to your Treko team! They
              will be more than happy to address any bug, design issue, or
              complaint you may have and get it fixed as soon as possible.
            </p>
          </div>
          <div className="faq__top--bullet">
            <h3>6. Can I use Treko in my language</h3>
            <p>
              Treko is easily supported in any language! With teams from all
              over we will be more then happy to pair your with your own Treko
              team from your local area. Feel free to talk with them too!
            </p>
          </div>
        </div>
        <button className="faq__top--button btn btn-blue">
          Still Have A Question?
        </button>
      </div>
      <div className="faq__bottom">
        <div className="faq__bottom--title">
          <h1>Try Treko And See For Yourself</h1>
          <p>
            If you would like us to contact you and get you started with Treko, put your email address below here and we will talk to you soon!
          </p>
        </div>
        <form className="faq__bottom--form" action="submit">
          <input
            type="email"
            className="faq__bottom--input"
            placeholder="Enter your email address"
            required
          />
          <button>Get Started</button>
        </form>
        <div className="faq__bottom--checks">
          <div className="faq__bottom--check">
            <CheckRounded />
            <p>14-day trial.</p>
          </div>
          <div className="faq__bottom--check">
            <CheckRounded />
            <p>No credit card required. </p>
          </div>
          <div className="faq__bottom--check">
            <CheckRounded />
            <p>Cancel anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
