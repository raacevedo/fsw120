import React from "react"
import data from "./data"


function App(){
const dataItems = data.map(item => <dataItem key={item.catchPhrase} item={item}/>)

    return (
        <div className="data-list">
            <SuperHero/>
        </div>
    )
}