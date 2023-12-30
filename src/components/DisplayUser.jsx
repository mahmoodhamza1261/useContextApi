import { useContext } from "react"
import { MyContext } from "./CreateContext"

function DisplayUser(){
  const {name}=useContext(MyContext)
  const {list}=useContext(MyContext)
return(
  <>
  <h1>
    User Details Panel
  </h1>
  <div>
    <h4>User's name</h4>
    {name}
 
    <h4>User's List item</h4>
    {list.item}
  
    <h4>item price</h4>
    {list.price}
  </div>
  </>
)
}
export default DisplayUser