import React, {useRef} from "react";
import "./style.css";

export default function LoginForm() {
  const passwordInput = useRef();
  const emailInput = useRef();
  function login() {
    emailInput.current.value;
    passwordInput.current.value;
    console.log(emailInput)
    console.log(passwordInput)
  }

    return (
      <div className="container">
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" ref={emailInput}/>
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
          onClick={(event) => {login(event)}}
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
