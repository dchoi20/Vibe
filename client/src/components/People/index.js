import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

export default function People() {
  const [peopleState, setPeopleState] = useState({
    people: [],
  });

  useEffect(() => {
    axios.get("users/all").then((res) => {
      // console.log(res.data._id)
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
          <li key={person._id}>
            <a href={`/others/${person._id}`}>
              <p>{person.name}</p>
            </a>
          </li>
        );
      })}
    </div>
  );
}


