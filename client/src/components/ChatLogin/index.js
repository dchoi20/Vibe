import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Chatlogin() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  function Username(e) {
    setUserName(e.target.value);
  }
  function Room(e) {
    setRoom(e.target.value);
  }

  return (
    <div>
      <div>
        <h1>Join</h1>
        <div>
          <input placeholder="name" type="text" onChange={Username} />
        </div>
        <div>
          <input placeholder="room" type="text" onChange={Room} />
        </div>
        <Link
          onClick={(e) => (!userName || !room ? e.preventDefault() : null)}
          to={`/Chatroom?username=${userName}&room=${room}`}
        >
          <button type="submit">Sign in</button>
        </Link>
      </div>
    </div>
  );
}
