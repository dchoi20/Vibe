import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

export default function People() {
  const [peopleState, setPeopleState] = useState({
    people: [],
  });

  useEffect(() => {
    axios.get("users/all").then((res) => {
      setPeopleState({
        ...peopleState,
        people: res.data,
      });
    });
  }, []);

  console.log(peopleState.people);

  return (
    <div class="People">
      {peopleState.people.map((person) => {
        return (
          <li>
            <a href="#!">
              <p>{person.name}</p>
            </a>
          </li>
        );
      })}
    </div>
  );
}
