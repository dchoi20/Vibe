import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

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

  // console.log(peopleState.people);

  return (
    <div className="People">
      {peopleState.people.map((person) => {
        return (
          <li key={person.name}>
            <a href="#!">
              <p>{person.name}</p>
            </a>
          </li>
        );
      })}
    </div>
  );
}
