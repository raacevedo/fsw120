import React from "react"

function DataItem(props) {
    return (
        <div className="data-item">
            <input type="checkbox" checked={}/>
            <p>Name: {props.item.name}</p>
            <p>Show: {props.item.show}</p>
            <input type="checkbox" checked={}/>
            <p>Image: {props.item.imageName}</p>
        </div>
    )
}

export default DataItem