import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
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
        </ul>
      </div>
    </nav>
  );
}
