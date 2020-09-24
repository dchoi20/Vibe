import React from "react";

export default function Chatlogin() {
  return (
    <div>
      <main>
        <form action="../Chatroom/index.js">
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username.."
              required
            />
          </div>
          <div className="form-group">
            <label for="room">Room</label>
            <select multiple className="form-control" name="room" id="room">
              <option value="lifestyle">Life Style</option>
              <option value="portrait">Portrait</option>
              <option value="travel">Travel</option>
              <option value="landscape">Landscape</option>
              <option value="macro">Macro</option>
              <option value="wildlife">Wildlife</option>
            </select>
          </div>
          <button type="submit"> Join Chat</button>
        </form>
      </main>
    </div>
  );
}
