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
            class=" left sidenav-trigger show-on-large"
          >
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
      <ul id="slide-out" class="sidenav">
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a class="subheader">Subheader</a>
        </li>
        <div class="divider"></div>
        <h5 className="center-align">Other Users</h5>
        <li>
          <People />
        </li>
      </ul>
    </div>
  );
}
