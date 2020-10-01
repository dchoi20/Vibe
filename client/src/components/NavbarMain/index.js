import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideNav from "../SideNav";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";

export default function Navbar() {
  function logOut(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.replace(`/`);
  }

  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });
  return (
    <nav className="blue">
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
