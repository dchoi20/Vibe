import React, {useEffect,useState} from "react";
import axios from "axios";
export default function Favorites() {
    
    const config = {
        headers : {
          Authorization: localStorage.token
        }}
    


    axios.get("/users/favorite/", config).then((res)=>{
      
       console.log(res.data)
    }).catch((err)=> console.log(err))




    return (
        <h1>favorites</h1>
    )
}