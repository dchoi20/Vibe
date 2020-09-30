import React , {useState,useEffect} from "react";
import "./style.css";
import axios from "axios";

export default function People () {
    const [peopleState,setPeopleState] = useState({
        people : []
    }) 


    axios.get("users/all").then((res) => {
   

        setPeopleState({
            ...peopleState,
            people: res.data
        })
        
        // res.data.map((person) => {
            //     console.log(person.name)
            // })
            
        })
        console.log(peopleState.people)

    






    
    return (
        <div className="People" >
            {}
        <h1></h1>
    </div>
)
}