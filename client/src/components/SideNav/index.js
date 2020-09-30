import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default function SideNav() {
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems);
  });
  return (
    <div>
      <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
        Drop Me!
      </a>

      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!"></a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>

        <li>
          <a href="#!">three</a>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">view_module</i>four
          </a>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>five
          </a>
        </li>
      </ul>
    </div>
  );
}
