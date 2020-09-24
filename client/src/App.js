import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/index";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/login" component={LoginForm} />
        <Redirect to="/main" /> <Main />
        <Route exact path="/" component={SignUpForm} />
      </div>
    </Router>
  );
}
