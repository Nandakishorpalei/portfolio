import React, { useState } from 'react';
import "./fixed.css";

const Bottom = () => {
const [bottomMargin, setBottomMargin] = useState("-40px");
setTimeout(()=>{
setBottomMargin("0");
},500)

    return (
        <div id="footerDiv">
             <h2 id="contacts">CONTACTS</h2>
             <div id="bottomOptions">
            
             <ul id="footer" style={{bottom:bottomMargin}}>
             <li className="footernavItem">
                    <a href="https://www.linkedin.com/in/nanda-kishor-palei-234846203/"><img src="images/whiteLinkedin.png" alt="linkedin" /></a>
                </li>

                <li className="footernavItem">
                    <a href="https://github.com/Nandakishorpalei"><img src="images/github.png" alt="twitter" /></a>
                </li>
                
                <li className="footernavItem">
                    <a href="https://www.instagram.com/nkp_45_/"><img src="images/whiteInstagram.png" alt="insta" /></a>
                </li>
                <li className="footernavItem">
                    <a href="https://www.facebook.com/arman.rahul.52/"><img src="images/whiteFacebook.png" alt="facebook" /></a>
                </li>
                <li className="footernavItem">
                    <a href="https://twitter.com/NandaPalei"><img src="images/whiteTwitter.png" alt="twitter" /></a>
                </li>

               
                
            </ul>
            
            <a className='call' style={{color:'white'}} href="tel:8895370647" onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"><img src="images/whiteCall.png" alt="twitter" />8895370647</a>
             <a style={{color:'white'}} href="mailto:nandakishorpalei7676@gmail.com"><p className='mail'>✉ : nandakishorpalei7676@gmail.com</p></a>
                
            
            </div>
        </div>
    );
};

export default Bottom;