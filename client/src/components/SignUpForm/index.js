import React, { useRef } from "react";
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
      email: emailInput.current.value
    }
    console.log(nameInput)
    console.log(emailInput)
    console.log(passwordInput)
    axios.post('users/signup',  user  )
      .then(res => {
        console.log(res);
        console.log(res.data)
      })
  }
  return (
    <div className="container">
      <form name="#signup">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="name" className="validate" ref={nameInput} />
            <label for="name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" ref={emailInput} />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" ref={passwordInput} />
            <label for="password">Password</label>
          </div>
        </div>
        <button
          onClick={(event) => { signUp(event) }}
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
