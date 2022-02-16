import React from 'react';
import "./skillCard.css";

const SkillCard = () => {
    return (
        <div id="skillCardDiv">

        {/* frontend */}
           <div className="skillCard">
           <img src="images/html5.jpg" alt="" />
           <h3>HTML</h3>
           </div>
           <div className="skillCard">
           <img src="images/css.png" alt="" />
           <h3>CSS</h3>
           </div>
           <div className="skillCard">
           <img src="images/js.png" alt="" />
           <h3>JAVASCRIPT</h3>
           </div>
           <div className="skillCard">
           <img src="images/react.svg" alt="" />
           <h3>REACT</h3>
           </div>
           <div className="skillCard">
           <img src="images/bootstrap.png" alt="" />
           <h3>BOOTSTRAP</h3>
           </div>


{/* backend */}
           <div className="skillCard">
           <img src="images/npm.svg" alt="" />
           <h3>NPM</h3>
           </div>
           <div className="skillCard">
           <img src="images/nodejs.svg" alt="" />
           <h3>NODE.JS</h3>
           </div>
           <div className="skillCard">
           <img src="images/expressjs.svg" alt="" />
           <h3>EXPRESS.JS</h3>
           </div>
           <div className="skillCard">
           <img src="images/mongoDB.png" alt="" />
           <h3>MONGODB</h3>
           </div>
           <div className="skillCard">
           <img src="images/postman.png" alt="" />
           <h3>POSTMAN</h3>
           </div>



{/* deploy */}
           <div className="skillCard">
           <img src="images/github.png" alt="" />
           <h3>GITHUB</h3>
           </div>
           <div className="skillCard">
           <img src="images/heroku.png" alt="" />
           <h3>HEROKU</h3>
           </div>

           <div className="skillCard">
           <img src="images/netlify.svg" alt="" />
           <h3>NETLIFY</h3>
           </div>
           <div className="skillCard">
           <img src="images/git.png" alt="" />
           <h3>GIT</h3>
           </div>
           
           <div className="skillCard">
           <img src="images/redux.svg" alt="" />
           <h3>REDUX</h3>
           </div>

        </div>
    );
};

export default SkillCard;