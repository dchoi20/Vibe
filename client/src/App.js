import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
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
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={SignUpForm} component={SignUpForm} />
          <Route exact path="/Home" component={Main} />
          <Route exact path="/chatlogin" component={Chatlogin} />
          <Route exact path="/chatroom" component={Chatroom} />
        </Switch>
      </div>
    </Router>
  );
}
