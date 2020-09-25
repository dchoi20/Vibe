import React from "react";
import "./style.css";

export default function SignUpForm() {
  return (
    <div className="container">
      <form name="#signup">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label for="password">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label for="password">Password</label>
          </div>
        </div>
        <button
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
