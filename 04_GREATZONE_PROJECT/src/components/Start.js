import React from "react";
import mountain from "C:\\Users\\PROGRAMMING\\Desktop\\04_GREATZONE_TEMPLATE\\greatzone\\src\\images\\mountain_friends.jpg"

export default function Start(){
    return(
      <div className="start-main">
          <div className="start">
            <div className="start-content">
                <h1>Make Zone Better!</h1>
                <p>Why Better Zone is important?</p>
            </div>
            <div className="start-image">
                <img className="mountain-img" src={mountain} alt="mountain" />
            </div>
        </div>
      </div>
    )
}