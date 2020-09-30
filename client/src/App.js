import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/index";
import LoginForm from "./components/LoginForm";
import user from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Chatlogin from "./components/ChatLogin/index";
import Chatroom from "./components/Chatroom/index";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import People from "./components/People";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact={true} path="/home" component={Main} />
          <ProtectedRoute path="/chatlogin" component={Chatlogin} />
          <ProtectedRoute path="/chatroom" component={Chatroom} />
          <ProtectedRoute path="/people" component={People} />
          <Route exact path="/">
            <Hero />
            <SignUpForm />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
