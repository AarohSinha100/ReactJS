import React from "react";
import imagg from "C:\\Users\\PROGRAMMING\\Desktop\\04_GREATZONE_TEMPLATE\\greatzone\\src\\images\\laptop-man.jpg"

export default function Middle(){
    return(
        <div className="Middle-main">
            <div className="middle">
            <div className="middle-content">
                <div><h4>Long established</h4></div>
                <div><p>Our organization has been working on making this worlda better place since the last 17 years. Our organization has been working on making this worlda better place since the last 17 years.Our organization has been working on making this worlda better place since the last 17 years.</p></div>

                <div>
                    <div><p>27 May 2023</p></div>
                    <div><p>Read More</p></div>
                </div>

            </div>

            <div className="middle-image">
                <img src={imagg}  alt="imgg" className="middle-img"/>
            </div>
        </div>
        </div>
    )
}