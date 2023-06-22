import React from "react";
import nikelogo from "C:\\Users\\PROGRAMMING\\Desktop\\PROJECT_1 (REACT)\\reactprojectone\\src\\images\\brand_logo.png"


export default function NavBar(){
    return(
        <div>
            <nav>
        <div className='logo'>
          <img src={nikelogo} alt='logoimg' />
        </div>

    <ul>
      <li>Menu</li>
      <li>Location</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

    <button className="login">Login</button>

      </nav>
        </div>
    )
}