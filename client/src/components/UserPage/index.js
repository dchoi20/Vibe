import React from "react";
import "./style.css";
import SideNav from "../SideNav";

export default function UserPage() {
  return (
    <div>
      <SideNav />

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
