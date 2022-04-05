import React from "react"

export default function Image(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={`./images/${props.img}`}/>
        </div>
        
    )
}