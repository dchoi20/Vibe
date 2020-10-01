import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "./style.css";
import axios from "axios";
export default function Navbar() {
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems);
  });
  return (
    <div>
      <nav className="black">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">
            VIBE
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a class="dropdown-trigger" data-target="dropdown1">
                <i class="material-icons small">menu</i>
              </a>
            </li>
          </ul>
        </div>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a className="blue-text" href="#signupForm">
              Sign Up
            </a>
          </li>
          <li>
            <a href="#!">Login</a>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <a href="#!">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
