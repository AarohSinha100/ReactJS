import React from "react";
import profilepic from "C:\\Users\\PROGRAMMING\\Desktop\\REACTJS\\firstreactproject\\src\\PROFILE_PROJECT\\images\\profile.jpg";
import "./style.css"

export default function Image(){
    return(
        <div className="image-div">
            <img className="image" src={profilepic} alt="image"/>
        </div>
    )
}