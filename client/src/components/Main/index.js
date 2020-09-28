import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Form, Button } from 'react-bootstrap';

export default function Main() {
  const [imagesState, setImagesState] = useState({
    images: [],
  });

  useEffect(() => {
    API.getImages().then((res) => {
      console.log(res.data);
      setImagesState({
        ...imagesState,
        images: res.data,
      });
    });
  }, []);

  return (


    
    <div>
      <Form.Control type="text" placeholder="Search Here ..."  />
      <Button variant="primary" size="lg" block>
    Search Image
  </Button>
  <br />
      <div>
        {imagesState.images.map((image) => (
          <img src={image.urls.small} alt={image.id} />
        ))}
      </div>
      
      
    </div>
  );
}
