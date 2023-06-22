import React from "react";
import shoe_image from "C:\\Users\\PROGRAMMING\\Desktop\\PROJECT_1 (REACT)\\reactprojectone\\src\\images\\shoe_image.png"


export default function Body(){
    return(
       <div className="MAIN-MAIN">
         <div className="MainBody">
            <div className="body-content">
                <div><h1>YOUR FEET DESERVE THE BEST</h1></div>
                <div><p>Your feet deserve the best and we are here to help you with our shoes. Explore a wide variety of shoes belonging to all price ranges.</p></div>
                <div>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
              
            </div>
            <div className="body-logo">
                <img src={shoe_image} alt="show_image" />
            </div>
        </div>
       </div>
    )
}