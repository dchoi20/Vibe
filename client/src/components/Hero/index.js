import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <div className="position-relative w-100 hero">
      <div className="position-absolute text-white d-flex flex-column align-items-start justify-content-center heroTwo">
        <div className="container">
          <div className="col-md-6">
            <p>Hello,</p>

            <h1 className="mb-4 mt-2 display-4 font-weight-bold">
              Welcome to <span className="text-warning">Vibe</span>
            </h1>
            <p>
              Thanks for checking out our site. Be sure to sign up and login to
              start creating your own collection of beautiful photography and
              connect with other users.
            </p>
            <div className="mt-5">
              <a
                href="#signup"
                className="btn px-5 py-3 text-white mt-3 mt-sm-0"
              >
                Sign Up!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
