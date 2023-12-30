// import React, { createContext, useContext, useState } from 'react';

import { createContext, useState } from "react"


// export const MyContext = createContext({});

// export default function CreateContext({children}) {
//   const today = new Date();

//   const [statecontext, setstatecontext] = useState("sdv");
//   const [startDate, setStartDate] = useState(today);

//   return (
//     <>

//     <MyContext.Provider value={{ statecontext,setstatecontext, startDate,setStartDate }}>
    
//    {children}
//     </MyContext.Provider>
//     </>
//   );
// }

export const MyContext=createContext()

function ContextProvider({children}){

  const [name,setName]=useState()
  const [list,setList]=useState({
    item:null,
    item_price:null
  })
  return(
    <>
    <MyContext.Provider value={{name,setName,list,setList}}>
     {children}
    </MyContext.Provider>
    </>
  )
}
export default ContextProvider