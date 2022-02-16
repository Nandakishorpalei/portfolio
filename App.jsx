import React from 'react';
import "./App.css";
import Top from "./components/fixed/Top";
import Bottom from "./components/fixed/Bottom";
import Name from "./components/aboutSection/Name";
import SkillCard from "./components/skillCard/SkillCard";
import Project from "./components/projects/Project";
import PersonalProject from "./components/projects/PersonalProject";

const App = () => {
    return (
        <div>
           <div id="Top">
        <Top />
        
 
        </div>
           <div id="container">
              <div id="topContainer">
              <Name />
              <video id="avatar" muted autoPlay >
                 <source src="profilePic.mp4" />
              </video>
              
              </div>

            <div id="skillDiv">
              <h2 className="heading">SKILLS</h2>
            <SkillCard />
            </div>

            <div id="groupDiv">
            <h2 className="heading">GROUP PROJECTS</h2>
            <Project />
            </div>

            <div id="personalDiv">
            <h2 className="heading">PERSONAL PROJECTS</h2>
            <PersonalProject />
            </div>
               
           </div>
           <Bottom /> 
        </div>
    );
};

export default App;







  