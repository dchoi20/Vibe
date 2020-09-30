import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

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
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              onClick={(event) => {
                logOut(event);
              }}
              type="submit"
              name="action"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
