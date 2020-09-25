import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

export default function Chatroom() {
  // useEffect(() => {
  //   const data = queryString.parse(location.search);
  //   console.log(data);
  // });

  const socket = io();

  socket.on("message", (message) => {
    console.log(message);
  });

  function handleSubmit(e) {
    e.preventDefault();
    const msg = e.target.message.value;
    socket.emit("chatMessage", msg);
  }
  return (
    <div>
      <form id="chat-form" onSubmit={handleSubmit}>
        <input
          id="msg"
          name="message"
          type="text"
          placeholder="enter message"
          required
          autoComplete="off"
        />
        <button type="submit">send</button>
      </form>
      <div id="chat-log"></div>
    </div>
  );
}
