import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/index";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path= "/login" component={LoginForm}/>
        <Route exact path= "/" component={SignUpForm}/>
        <Route exact path="/main" component={Main} />
      </div>
    </Router>
  );
}
