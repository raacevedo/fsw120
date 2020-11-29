import React from "react"

function Components(props){
    
    return (
        <div style={{backgroundColor:props.color}}className="boxes">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Components