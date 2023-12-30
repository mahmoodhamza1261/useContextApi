// import React, { useContext } from 'react';
// import { MyContext } from './CreateContext';

import { useContext } from "react";
import { MyContext } from "./CreateContext";
import DisplayUser from "./DisplayUser";

// export default function User() {
//   const { statecontext,setstatecontext } = useContext(MyContext);
// console.log("statecontext",statecontext)
//   return (
//     <div>
// <input type="text" onChange={(e)=>setstatecontext(e.target.value)}/>

// {statecontext}
//     </div>
//   );
// }

function User(){
  const {name,setName}=useContext(MyContext);
  const {list,setList}=useContext(MyContext)

   return(
    <>
    <h3>Enter User Name</h3>
    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    <h3>Enter List item </h3>
    <input type="text" onChange={(e)=>setList((prev)=>({...prev,item:e.target.value}))}/>
    <h3>Enter item price </h3>
    <input type="text" onChange={(e)=>setList((prev)=>({...prev,price:e.target.value}))}/>
  
    <DisplayUser/>
    </>
   )
}
export default User;