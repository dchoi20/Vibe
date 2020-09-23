import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/Home">vibe</Link>
      </li>
    </ul>
  );
}
