import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Main from "./components/Main/index";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <SignUpForm />
      </div>
    </Router>
  );
}
