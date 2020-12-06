import React from "react"

function Blog(props) {
    return (
        <div id="boxes">
            
            <h3>{props.title}</h3>
            <p>{props.subTitle}</p>
            <h6>Posted by + " {props.author}" + " {props.date}"</h6>
            <hr/>
        </div>
    )
}

export default Blog