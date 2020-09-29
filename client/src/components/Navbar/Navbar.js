import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

export default function Navbar() {
  function logOut(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.replace(`/`);
  }
  return (
    <nav className="black">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          Vibe
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#signupForm">Sign Up</a>
          </li>
          <li>
            <a href="#loginForm">Login</a>
          </li>
          <li>
            <button
              onClick={(event) => {
                logOut(event);
              }}
              className="btn waves-effect waves-light blue"
              type="submit"
              name="action"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
