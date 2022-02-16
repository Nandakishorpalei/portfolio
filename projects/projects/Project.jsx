import React, { useEffect, useState } from "react";
import "./project.css";


const Project = () => {
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);


  return (
    <div id="projectCardDiv">
    <div id="demoDiv" style={{display:display1 ? "block" : "none"}}>
    <button className="crossSymbol" onClick={(()=>{
      setDisplay1(false)
    })}>❌</button>
    <video id="iframe" controls>
          <source src="cb2.mp4" type="video/mp4" />
        </video>
    </div>


      <div className="projectCard" style={{display: display1 || display2 ? "none" : "block"}}>
      <img className="iframe" src="images/cb2.png" alt="" />
        <p className="aboutProject">A full-stack clone of the Cb2 application developed by 4 members in a time span of 5 days. 
        We added features <br/> like Google Authentication, filter products, sort products, cart manipulation, & Razorpay payment, etc.</p>
        
        <div className="techStack">
          <img src="images/nodejs.svg" alt="" className="techStackImg" />
          <img src="images/expressjs.svg" alt="" className="techStackImg" />
          <img src="images/mongodb.png" alt="" className="techStackImg" />
          <img src="images/npm.svg" alt="" className="techStackImg" />
          <img src="images/postman.png" alt="" className="techStackImg" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0xMlTSJza1T-1g1eBFGGe2Y9Efxl0sr-o8KaWQHtec_FO3egZ_cjCJprxbMmlvvdra0&usqp=CAU" alt="" className="techStackImg" />
          <img src="images/bootstrap.png" alt="" className="techStackImg" />
        </div>

        <div className="projectButtonDiv">
            <button className="custom-btn btn-customize"><a href="https://github.com/Nandakishorpalei/cb2-backend" target="_blank">View Code</a></button>
            <button className="custom-btn btn-customize"><a href="https://cb2-clone.herokuapp.com/" target="_blank">Go to App</a></button>
            <button className="custom-btn btn-customize" onClick={(()=>{
              setDisplay1(true);
              
            })}>view Demo</button>
            
        </div>
      </div>


      <div id="demoDiv" style={{display:display2 ? "block" : "none"}}>
    <button className="crossSymbol" onClick={(()=>{
      setDisplay2(false)
    })}>❌</button>
    <video id="iframe" controls>
          <source src="koovs.mp4" type="video/mp4" />
        </video>
    </div>

      <div className="projectCard" style={{display: display1 || display2 ? "none" : "block"}}>
        <img className="iframe" src="images/koovs.png" alt="" />
        <p className="aboutProject">A front-end clone of koovs application built by 6 members in a time span of 7 days.
         We added features <br /> like sort products, filter products, add to cart, cart manipulation, & dummy payment.</p>
        
         <div className="techStack">
          <img src="images/html5.jpg" alt="" className="techStackImg" />
          <img src="images/css.png" alt="" className="techStackImg" />
          <img src="images/js.png" alt="" className="techStackImg" />
          <img src="images/bootstrap.png" alt="" className="techStackImg" />
          <img src="images/github.png" alt="" className="techStackImg" />

        </div>

        <div className="projectButtonDiv">
            <button className="custom-btn btn-customize"><a href="https://github.com/dimple06varshney/koovs" target="_blank">View Code</a></button>
            <button className="custom-btn btn-customize"><a href="https://nandakishorpalei.github.io/koovs/" target="_blank">Go to App</a></button>
            <button className="custom-btn btn-customize" onClick={(()=>{
              setDisplay2(true);
             
            })}>view Demo</button>
            
        </div>
      </div>
    </div>

  );
};

export default Project;
