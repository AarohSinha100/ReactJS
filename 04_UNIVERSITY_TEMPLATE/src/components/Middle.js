import React from "react";
import pic from "C:\\Users\\PROGRAMMING\\Desktop\\UNIVERSITY_TEMPLATE\\universityproject\\src\\pexels-laura-stanley-2519217.jpg"

import pic2 from "C:\\Users\\PROGRAMMING\\Desktop\\UNIVERSITY_TEMPLATE\\universityproject\\src\\pexels-eminumana-3978518.jpg"

import pic3 from "C:\\Users\\PROGRAMMING\\Desktop\\UNIVERSITY_TEMPLATE\\universityproject\\src\\pexels-thomas-hobiger-3403295.jpg"

export default function Middle(){
    return(
        <div className="MIDDLE">

       <div className="middle-content">
       <div>
            <img src={pic} alt="img" className="img"/>
       </div>
       <div>
            <img src={pic3} alt="img" className="img"/>
        </div>
        <div>
            <img src={pic2} alt="img" className="img"/>
        </div>

          
       </div>
        </div>
    )
}