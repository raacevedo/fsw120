import React from "react"

function Spot(props){
    return (
        <div className="card">
            <h2>Place: {props.place}</h2>
            <h3>Price: {props.price}</h3>
            <h3>Time To Go: {props.timeToGo}</h3>
        </div>
    )
}

export default Spot