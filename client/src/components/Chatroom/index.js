import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

export default function Chatroom() {
  // useEffect(() => {
  //   const data = queryString.parse(location.search);
  //   console.log(data);
  // });

  io();
  return (
    <div>
      <h1>Chatroom</h1>
    </div>
  );
}
