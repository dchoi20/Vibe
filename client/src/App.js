import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarLogin from "./components/NavbarLogin";
import NavbarMain from "./components/NavbarMain";
import Main from "./components/Main/index";
import LoginForm from "./components/LoginForm";
import UserPage from "./components/UserPage";
import SignUpForm from "./components/SignUpForm";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Chatlogin from "./components/ChatLogin/index";
import Chatroom from "./components/Chatroom/index";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import People from "./components/People";
import Favorites from "./components/Favorites/index";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact={true} path="/home" component={Main} />
          <ProtectedRoute path="/UserPage" component={UserPage} />
          <ProtectedRoute path="/chatlogin" component={Chatlogin} />
          <ProtectedRoute path="/chatroom" component={Chatroom} />
          <ProtectedRoute path="/people" component={People} />
          <Route path="/favorites" component={Favorites} />
          <Route exact path="/">
            <NavbarLogin />
            <Hero />
            <LoginForm />
            <SignUpForm />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
