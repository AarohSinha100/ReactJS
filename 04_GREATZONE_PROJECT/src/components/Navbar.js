import React from "react";
import instagram from "C:\\Users\\PROGRAMMING\\Desktop\\04_GREATZONE_TEMPLATE\\greatzone\\src\\images\\intsagram.png"
import twitter from "C:\\Users\\PROGRAMMING\\Desktop\\04_GREATZONE_TEMPLATE\\greatzone\\src\\images\\twitter.png"
import linkedin from "C:\\Users\\PROGRAMMING\\Desktop\\04_GREATZONE_TEMPLATE\\greatzone\\src\\images\\linkedin.png"

export default function Navbar(){
    return(
        <nav>
            <h3>GreatZone</h3>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Posts</li>
                    <li><img src={instagram} alt="insta"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                    <li><img src={linkedin} alt="linkedin"/></li>
                </ul>
            </div>
        </nav>
    )
}