import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import People from "../People";
import Logo from "../assets/Vibe_Logo_White.png";
import SideNavLogo from "../assets/Vibe_Logo.png";
import AltLogo from "../assets/Vibe_Alt_Logo_White.png";
export default function SideNav() {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });
  function logOut(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.replace(`/`);
  }

  return (
    <div>
      <nav className="black">
        <div className="nav-wrapper">
          <Link to="/home" className="brand-logo center">
            <img className="Logo" alt="VIBE" src={Logo} />
            <img className="Logo" alt="VIBE" src={AltLogo} />
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link
                onClick={(event) => {
                  logOut(event);
                }}
                type="submit"
                name="action"
              >
                Logout
              </Link>
            </li>
          </ul>

          <Link
            to="#"
            data-target="slide-out"
            className=" left sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </Link>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <Link to="/home" className="center-align">
              <img className="circle" src={SideNavLogo} />
            </Link>
          </div>
        </li>
        <li>
          <Link to="/favorites">
            <h4>Welcome</h4>
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link to="/favorites">My Collection</Link>
        </li>
        <li>
          <Link to="/feature"> Daily Featured Images</Link>
        </li>
        <li>
          <Link to="/home">Search Images</Link>
        </li>

        <div className="divider"></div>
        <h6 className="center-align">Check out other users!</h6>
        <ul>
          <People />
        </ul>
      </ul>
    </div>
  );
}
