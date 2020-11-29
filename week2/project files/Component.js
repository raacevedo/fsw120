import React from "react"

function Components(props){
    // let styles={backgroundColor:props.color}
    return (
        <div className="components">
            <h3>{props.title}</h3>
            <h2>{props.subtitle}</h2>
            <p>{props.information}</p>
        </div>
    )
}

export default Components