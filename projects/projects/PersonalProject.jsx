import React, { useState } from "react";
import "./project.css";


const Project = () => {
    const [videoLink, setVideoLink] = useState("lncollection.mp4");
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);

  return (
    <div id="projectCardDiv">
    <div id="demoDiv" style={{display:display1 ? "block" : "none"}}>
    <button className="crossSymbol" onClick={(()=>{
      setDisplay1(false)
    })}>❌</button>
    <video id="iframe" controls>
          <source src="lncollection.mp4" type="video/mp4" />
        </video>
    </div>

      <div className="projectCard" style={{display: display1 || display2 ? "none" : "block" }}>
      <img className="iframe" src="images/lncollection.png" alt="" />
        <p className="aboutProject">A shopping application was developed by me.
         I added features like Google Authentication, Facebook Authentication,
          PayPal cart, PayPal & Razorpay payment, etc.</p>
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
            <button className="custom-btn btn-customize"><a href="https://github.com/Nandakishorpalei/lncollection" target="_blank">View Code</a></button>
            <button className="custom-btn btn-customize"><a href="https://lncollection.herokuapp.com/" target="_blank">Go to App</a></button>
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
          <source src="netFlixVideo.mp4" type="video/mp4" />
        </video>
    </div>


      <div className="projectCard" style={{display: display1 || display2 ? "none" : "block"}}>
        <img className="iframe" src="images/youtubeClone.png" alt="" />
        <p className="aboutProject">Clone of Youtube application built by me.
         I tried to clone this using Google youtube API. I added features like trending videos, and search options. </p>
         <div className="techStack">
          <img src="images/html5.jpg" alt="" className="techStackImg" />
          <img src="images/css.png" alt="" className="techStackImg" />
          <img src="images/js.png" alt="" className="techStackImg" />
          <img src="images/bootstrap.png" alt="" className="techStackImg" />

        </div>
        <div className="projectButtonDiv">
            <button className="custom-btn btn-customize"><a href="https://github.com/Nandakishorpalei/youtubeclone" target="_blank">View Code</a></button>
            <button className="custom-btn btn-customize"><a href="https://nandakishorpalei.github.io/youtubeclone/" target="_blank">Go to App</a></button>
            <button className="custom-btn btn-customize" onClick={(()=>{
              setDisplay2(true);
            })}>view Demo</button>
            
        </div>
      </div>
    </div>

  );
};

export default Project;
