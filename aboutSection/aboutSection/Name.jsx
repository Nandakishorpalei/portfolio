import React from "react";
import "./name.css";


const Name = () => {
  return (
    <div>
      <section id="nameContainer">
        <div class="content">
          <h2 className="nameContent">HI<br/>I'M NANDA KISHOR PALEI</h2>
          <h2 className="nameContent">HI<br/>I'M NANDA KISHOR PAL</h2>
        </div>
        <div id="aboutContent">
            <p>A Passionate Full Stack Web Developer, Who Works With Both The Client And Server Sides Of a Software Application.
            I Build Web Application Using MongoDB, Express.js, React, & Node.js</p>
            <a href="https://drive.google.com/file/d/1-Vj--vT6gm1O5I6TS3VtlCyHK5SZnn_s/view?usp=sharing" target="_blank"><button className="custom-btn btn-customize"><span>Resume</span></button></a>
        </div>
      </section>
    </div>
  );
};

export default Name;
