import React, { useState } from "react";
import MyContext from "./Createcontext";
//import About from "../components/About";
const Setstate=(props)=>{
 
    const state={
        "name":"ruthik",
        "age":21}
        const url=`http://localhost:5000/api/note`
       const Notes=[];

        const [Note,setNote]=useState(Notes);
        const addNote=async (Add)=>{
          const {title,tag,description}=Add
          const response = await fetch(url, {
            method: 'POST', 
           
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem('token')

            },
            body: JSON.stringify({title,tag,description})
          });
            console.log("added"); 
            const json=await response.json();
        }
        const fetchNote=async ()=>{
                 
          const response = await fetch(`${url}/fetchdata`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem('token')
            },
          });
            console.log("fetch data");
            const json= await response.json(); 
            setNote(json);
            console.log(json);
        }
        const deleteNote=async (key)=>{
          const response = await fetch(`${url}/deletedata/${key}`, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem('token')

            },
          });
            console.log("data deleted");
            const json= await response.json();
            console.log(json);

            const NewNote=Note.filter((Note)=>{
              return key!==Note._id
            })
            setNote(NewNote);
            return json;
        }


    return(<MyContext.Provider value={{state,Note,setNote,addNote,fetchNote,deleteNote}}>
           {props.children}
    </MyContext.Provider>);
}
export default Setstate;
