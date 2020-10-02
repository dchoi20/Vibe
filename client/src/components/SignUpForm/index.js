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
    <div className="formz" id="signupForm">
      <div>
        <div className="container">
          <div className=" row">
            <form className="formPosition col m5 s12">
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
                  <label htmlFor="name">Name</label>
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
                  signUp(event);
                }}
                className="btn waves-effect waves-light blue"
                type="submit"
                name="action"
              >
                Sign Up
              </button>
              <div className="password-requirement">

              <ul>Password Requirement
                <li>Minimum of 8 Characters</li>
                <li>At least 1 uppercase letter</li>
                <li>At least 1 lowercase letter</li>
                <li>At least 1 special Character</li>
              </ul>
              </div>
            </form>
            <div className="col m2 s12"></div>
            {/* <LoginForm /> */}
            <div className="col m5 s12 formPosition center-align signupText blue-text darken-1">
              <blockquote>
                “To me, photography is an art of observation. It’s about finding
                something interesting in an ordinary place… I’ve found it has
                little to do with the things you see and everything to do with
                the way you see them.”
                <br /> <cite className="center-align">Elliott Erwitt</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
