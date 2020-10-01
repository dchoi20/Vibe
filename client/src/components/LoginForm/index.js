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

    console.log(emailInput);
    console.log(passwordInput);
    axios.post("users/login", user).then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.token);
      localStorage.token = res.data.token;
      console.log(user);

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
      <div id="signupForm">
        <div className="container">
          <div className=" row">
            <div className="col s5 formPosition center-align signupText">
              <h5>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                <br /> <h6 className="center-align">Dane Edwards</h6>
              </h5>
            </div>
            <div className="col s2"></div>
            <form className="formPosition col s5">
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
                  <label for="email">Email</label>
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
                  <label for="password">Password</label>
                </div>
              </div>
              <button
                onClick={(event) => {
                  login(event);
                }}
                class="btn waves-effect waves-light blue"
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
