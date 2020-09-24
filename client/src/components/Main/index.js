import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function Main() {
  const [imagesState, setImagesState] = useState({
    images: [],
  });

  useEffect(() => {
    API.getImages().then((res) => {
      console.log(res);
      setImagesState({
        ...imagesState,
        images: res.data.results,
      });
    });
  }, []);

  return (
    <div>
      <img></img>
    </div>
  );
}
