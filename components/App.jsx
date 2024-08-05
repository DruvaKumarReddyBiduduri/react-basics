import React, { useState } from "react"

export default function App() {
    const [name,setName]=useState("")
    return (
        <div>
            <p>Hello</p>
            <img width={"200px"} src="https://cdn2.unrealengine.com/fgss02-keyart-logonocopy-16x9-1920x1080-1920x1080-5987888b482d.png"/>
            <br/>
            <input onChange={(e)=>{
                setName(e.target.value.toUpperCase())
            }}/>
            <button onClick={()=>{
                console.log("clicked")
            }}>click</button>
            <h1>{name}</h1>
        </div>
    )
}