import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Created By</h5>
            <p className="grey-text text-lighten-4">
              Danny Choi, Ian Pyeatt, and Evan Mohammed
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Checkout Our Github Profiles</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/dchoi20"
                >
                  Danny
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/pyeatti"
                >
                  Ian
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/EvanMohammed"
                >
                  Evan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Vibe
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/dchoi20/Vibe"
          >
            Site Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
