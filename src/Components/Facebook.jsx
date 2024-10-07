import React, { useState } from "react";
// import "../../src/style.css"
import db from "../pages/db";
export default function Facebook() {
    let [Img,setimg]=useState(db)
    let clear=()=>
    {
        setimg([])
    }
  return (
    <>
    <h1>{Img.length} birthday</h1>
   {Img.map(x=>(
    <>
    <div id="div1">
    
   <img className="imm" src={x.img} alt="" />
   <h1>{x.id}</h1>
   <p>{x.dob}</p>
   </div>
   </>
   ))}
   <button onClick={clear}>Click me</button>
   </>
  )
}
