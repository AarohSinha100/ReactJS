import React from "react";
import "./Main.css"

export default function Main(){
    return(
        <div className="main-div">
            <h1 className="main-h1">Fun Facts About React</h1>
            <ul>
                <li>Was First Released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has Well over 100K stars on Github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousand of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}