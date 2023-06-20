import React from "react";
import twitter from "C:\\Users\\PROGRAMMING\\Desktop\\REACTJS\\firstreactproject\\src\\PROFILE_PROJECT\\images\\twitter.png";
import facebook from "C:\\Users\\PROGRAMMING\\Desktop\\REACTJS\\firstreactproject\\src\\PROFILE_PROJECT\\images\\facebook.png"
import instagram from "C:\\Users\\PROGRAMMING\\Desktop\\REACTJS\\firstreactproject\\src\\PROFILE_PROJECT\\images\\instagram.png"
import linkedin from "C:\\Users\\PROGRAMMING\\Desktop\\REACTJS\\firstreactproject\\src\\PROFILE_PROJECT\\images\\linkedin.png"
import "./style.css";

export default function SocialMedia(){
    return(
        <div className="SocialMediaLogo">
            <img className="twitter" src={twitter} alt="twitter" />
            <img className="facebook" src={facebook} alt="facebook"/>
            <img className="instagram" src={instagram} alt="instagram"/>
            <img className="linkedin" src={linkedin} alt="linkedin"/>
        </div>
    )
}