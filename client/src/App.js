import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/index";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}
