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
      {/* {imagesState.images.map(image => {
        <img src={image.urls.full} alt={image.alt_description}/>
      })} */}
      <h1>hi</h1>
    </div>
  );
}
