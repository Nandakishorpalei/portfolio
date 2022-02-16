import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import "./fixed.css";

const Top = () => {
const [margin, setMargin] = useState("-40px");
setTimeout(()=>{
setMargin("10px");
},500)

    return (
        <div>
          <div id="mynavdiv">
           
            <ul id="mynavbar" style={{marginTop:margin}}>
                <Link to="Top" smooth={true}><li className="navItem">
                <img src="images/whiteHome.png" alt="home" />
                </li></Link>
                <Link to="skillDiv" smooth={true}><li className="navItem">
                <img src="images/whiteSkill.png" alt="skills" />
                </li></Link>
                <Link to="groupDiv" smooth={true}><li className="navItem">
                <img src="images/whiteGroup.png" alt="group project" />
                </li></Link>
                <Link to="personalDiv" smooth={true}><li className="navItem">
                <img src="images/whitePersonal.png" alt="personal project" />
                </li></Link>
                
            </ul>
             <div id="mybox" className="myspinner">
            </div> 
        </div>
        
        <img id="mypic" src="images/resumepiccrop.png" alt="" />
        <div id="container">
        </div>
           

        </div>
    );
};

export default Top;