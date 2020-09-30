import React from "react";
import "./style.css";
import NavbarMain from "../NavbarMain";
import { Nav } from "react-bootstrap";

export default function UserPage() {
  return (
    <div>
      <NavbarMain />
      <div className="container">
        <div className="row center-align">
          <h1>Ian</h1>
          <p>My Collection</p>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}
