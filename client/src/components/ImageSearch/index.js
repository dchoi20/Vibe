import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function ImageSearch() {
  const [searchImagesState, setSearchImagesState] = useState({
    searchImages: [],
  });

  function onSubmit(e) {
    e.preventDefault();
    let query = e.target.search.value;

    API.searchImages(query).then((res) => {
      console.log(res.data);
      setSearchImagesState({
        ...searchImagesState,
        searchImages: res.data,
      });
    });
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
