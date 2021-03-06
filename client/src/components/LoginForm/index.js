import React, { useRef } from "react";
import "./style.css";
import axios from "axios";
import SignUpForm from "../SignUpForm/index";
export default function LoginForm() {
  const passwordInput = useRef();
  const emailInput = useRef();
  function login(event) {
    event.preventDefault();
    const user = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    axios.post("users/login", user).then((res) => {
      localStorage.token = res.data.token;

      window.location.replace(`/home`);
    });
    if (!user.email && !user.password) {
      return;
    }

    if (!user) {
      return window.location.replace("/users/login");
    }
  }

  return (
    <div className="formzz">
      <div id="loginForm">
        <div className="container">
          <div className=" row">
            <div className="col m5 s12 formPosition center-align signupText blue-text darken-1">
              <blockquote>
                “Only photography has been able to divide human life into a
                series of moments, each of them has the value of a complete
                existence.”
                <br /> <cite className="center-align">Eadweard Muybridge</cite>
              </blockquote>
            </div>
            <div className="col m2 s12"></div>
            <form className="formPosition col m5 s12">
              <h6>Already a Member?</h6>
              <p>Login!</p>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    ref={emailInput}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    ref={passwordInput}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <button
                onClick={(event) => {
                  login(event);
                }}
                className="btn waves-effect waves-light blue"
                type="submit"
                name="action"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
