import React from "react";
import "./body.css"
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
const Body=()=>{
    return(
        <div className="body">
            <div className="body1">
            <Section1/>
            </div>
            <div className="body2">
            <Section2/>
            </div>
            <div className="body3">
            <Section3/>
            </div>            
        </div>
    )
}
export default Body;