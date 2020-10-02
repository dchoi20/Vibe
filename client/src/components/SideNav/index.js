import React, { useEffect } from "react";
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
          <a href="/home" className="brand-logo center">
            <img className="Logo" alt="VIBE" src={Logo} />
            <img className="Logo" alt="VIBE" src={AltLogo} />
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

          <a
            href="#"
            data-target="slide-out"
            className=" left sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <a href="/home" className="center-align">
              <img className="circle" src={SideNavLogo} />
            </a>
          </div>
        </li>
        <li>
          <a href="/favorites">
            <h4>Welcome</h4>
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a href="/favorites">My Collection</a>
        </li>
        <li>
          <a href="/feature"> Daily Featured Images</a>
        </li>
        <li>
          <a href="/home">Search Images</a>
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
