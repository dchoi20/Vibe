import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function ImageSearch() {
  const [searchImagesState, setSearchImagesState] = useState({
    searchImages: [],
  });

  useEffect(() => {
    API.searchImages().then((res) => {
      console.log(res.data);
      setSearchImagesState({
        ...searchImagesState,
        searchImages: res.data,
      });
    });
  }, []);

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
