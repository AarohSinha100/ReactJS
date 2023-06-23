import React from "react";
import Bottom_1 from "./Bottom_1";
import Bottom_2 from "./Bottom_2";
import Bottom_3 from "./Bottom_3";

export default function Bottom(){
    return(
        <div className="Bottom-main">
            <div className="Bottom">
            <div><Bottom_1 /></div>
            <div><Bottom_2 /></div>
            <div><Bottom_3 /></div>
        </div>
        </div>
    )
}