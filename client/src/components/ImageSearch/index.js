import React from "react";

export default function ImageSearch() {
  function onSubmit(e) {
    e.preventDefault();
    let searchedResult = e.target.search.value;
    console.log(searchedResult);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search for More Images"
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
