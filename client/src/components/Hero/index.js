import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col s2"></div>
          <div className="col s8 heroMargin center-align">
            <div className="col s2"></div>
            <h1 className="">Welcome</h1>
            <h4 className="heroText">
              Thanks for checking out our site. Be sure to sign up and login to
              start creating your own collection of beautiful photography and
              connect with other users.
            </h4>
            <a class="waves-effect waves-dark btn blue" href="#signupForm">
              Sign Up!
            </a>
            <div className="heroText"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
