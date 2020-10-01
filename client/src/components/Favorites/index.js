import React, {useEffect,useState} from "react";
import axios from "axios";
export default function Favorites() {
    const [useFavorite, setUseFavorite] = useState({
        collection: [],
    })








    const config = {
        headers : {
          Authorization: localStorage.token
        }}
    
        useEffect(() => {

            
            axios.get("/users/favorite/", config).then((res)=>{
                
                console.log(res.data[0].favImageURL)
                const favImg = res.data
                setUseFavorite({
                    ...useFavorite,
                    collection: favImg
                })
                console.log(useFavorite)
            })
        }, [])




    return (

        <h1>favorites</h1>
    )
}