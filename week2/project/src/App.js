import React from "react"
import Component from "./Component"
import "./style.css"

function App() {
    return(
        <div className="components">
            <Component
                color="red"
                title="John"
                subtitle="Mr Cat Guy"
                information="John has 10 cat. All orange Tabbies."
            />
               <Component
                color="blue"
                title="Bob"
                subtitle="Mr Tall Guy"
                information="Bob is over 7ft."
            />
               <Component
                color="orange"
                title="Rick"
                subtitle="Mr Talent"
                information="Rick can sing like an angel."
            />
               <Component
                color="yellow"
                title="Matt"
                subtitle="Mr Sensitive"
                information="Matt loves rom-coms and always sheds a tear."
            />
               <Component
                color="green"
                title="Billy"
                subtitle="Mr Muscles"
                information="Billy loves to work out and it shows."
            />
               <Component
                color="pink"
                title="Sue"
                subtitle="Ms Runner"
                information="Sue has done over 20 marathons."
            />
               <Component
                color="grey"
                title="Melissa"
                subtitle="Ms Rocket Scientist"
                information="Melissa iss a literal Rocket Scientist with 2 PHDs."
            />
               <Component
                color="purple"
                title="Karen"
                subtitle="Ms Crafty"
                information="Karen can make anything out anything."
            />
               <Component
                color="maroon"
                title="Monica"
                subtitle="Ms Speed Racer"
                information="Monica is an accomplished race car driver."
            />
               <Component
                color="aqua"
                title="Barbara"
                subtitle="Ms Movie Star"
                information="Barbara has starred in a number of movies."
            />
        </div>
    ) 
}

export default App