import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

export default function Chatroom() {
  useEffect(({ location }) => {
    const data = queryString.parse(location.search);
    console.log(location.search);
    console.log(data);
  });
  return (
    <div>
      <h1>Chatroom</h1>
    </div>
  );
}
