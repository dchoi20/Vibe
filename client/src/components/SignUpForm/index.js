import React, { useRef } from "react";
import LoginForm from "../LoginForm";
import "./style.css";
import axios from "axios";

export default function SignUpForm() {
  const nameInput = useRef();
  const passwordInput = useRef();
  const emailInput = useRef();
  function signUp(event) {
    event.preventDefault();
    const user = {
      name: nameInput.current.value,
      password: passwordInput.current.value,
      email: emailInput.current.value,
    };
    console.log(nameInput);
    console.log(emailInput);
    console.log(passwordInput);
    axios.post("users/signup", user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
  return (
    <div className="formz" id="loginForm">
      <div id="signupForm">
        <div className="container">
          <div className=" row">
            <form className="formPosition col s5">
              <h6>New User?</h6>
              <p>Sign Up Here</p>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="name"
                    type="text"
                    className="validate"
                    ref={nameInput}
                  />
                  <label for="name">Name</label>
                </div>
              </div>
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
                  signUp(event);
                }}
                class="btn waves-effect waves-light blue"
                type="submit"
                name="action"
              >
                Sign Up
              </button>
            </form>
            <div className="col s2"></div>
            {/* <LoginForm /> */}
            <div className="col s5 formPosition center-align signupText">
              <h5>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                <br /> <h6 className="center-align">Dane Edwards</h6>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
