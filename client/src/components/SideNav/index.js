import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import People from "../People";

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
          <a href="#!">
            <h6 className="center-align">Hello, User</h6>
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a href="../Favorites">Your Collection</a>
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
