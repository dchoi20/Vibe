import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from "../assets/Vibe_Logo_White.png";
import AltLogo from "../assets/Vibe_Alt_Logo_White.png";
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
          <Link to="#" className="brand-logo center">
            <img className="Logo" alt="VIBE" src={Logo} />
            <img className="Logo" alt="VIBE" src={AltLogo} />
          </Link>
          <ul id="nav-mobile" className="left">
            <li>
              <Link class="dropdown-trigger" data-target="dropdown1">
                <i class="material-icons small">menu</i>
              </Link>
            </li>
          </ul>
        </div>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <Link className="blue-text" to="#signupForm">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="blue-text" to="#loginForm">
              Login
            </Link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <Link className="blue-text" to="#!">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
