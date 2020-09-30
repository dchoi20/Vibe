import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
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
          VIBE
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#signupForm">Sign Up</a>
          </li>
          <li>
            <a href="#loginForm">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
