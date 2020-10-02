import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../SideNav";
import Footer from "../Footer";
import Favorites from "../Favorites"
// import Favorite from "../../../../models/Favorite";

export default function OtherFavorites() {
  

  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };
 
 
      
    axios
      .get("/others/:id", config)
   
      .then((res) => {
        console.log(res)})
      .catch((err) => console.log(err));


  return (
    <div>
      <SideNav />
     <h1></h1>
     <Favorites />
      <Footer />
    </div>
  );
}
