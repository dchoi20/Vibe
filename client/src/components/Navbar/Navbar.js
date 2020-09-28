import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

export default function Navbar() {
  function logOut(event) {
    event.preventDefault();
    localStorage.removeItem('token')
    window.location.replace(`/login`)
  }
  return (
    <ul>
      <li>
        <Link to="/Home">vibe</Link>
      </li>
      <li>
        <Link to="/chatlogin">Chatlogin</Link>
      </li>
      <li>
      <button
          onClick={(event) => {
            logOut(event);
          }}
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Log out
        </button>
      </li>
    </ul>
  );
}
