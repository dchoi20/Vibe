import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/index";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Chatlogin from "./components/ChatLogin/index";
import Chatroom from "./components/Chatroom/index";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/login" component={LoginForm} />
        <Route exact to="/main" /> <Main />
        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/chatlogin" component={Chatlogin} />
        <Route exact path="/chatroom" component={Chatroom} />
      </div>
    </Router>
  );
}
