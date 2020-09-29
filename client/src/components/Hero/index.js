import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1 className="heroMargin">Welcome</h1>
            <p className="heroText">
              Thanks for checking out our site. Be sure to sign up and login to
              start creating your own collection of beautiful photography and
              connect with other users.
            </p>
            <div className="heroText">
              <a class="waves-effect waves-dark btn blue" href="#signupForm">
                Sign Up!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
