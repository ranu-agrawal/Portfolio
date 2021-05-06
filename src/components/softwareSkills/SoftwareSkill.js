import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li key="c" className="software-skill-inline" name="c">
            <img
              src="https://img.icons8.com/color/144/000000/c-programming.png"
              alt="something"
            />
            <p>C</p>
          </li>
          <li key="c++" className="software-skill-inline" name="c++">
            <img
              src="https://img.icons8.com/color/144/000000/c-plus-plus-logo.png"
              alt="something"
            />
            <p>C++</p>
          </li>
          <li key="python" className="software-skill-inline" name="python">
            <img
              src="https://img.icons8.com/color/144/000000/python.png"
              alt="something"
            />
            <p>Python</p>
          </li>
          <li key="html" className="software-skill-inline" name="html">
            <img
              src="https://img.icons8.com/color/144/000000/html-5--v1.png"
              alt="something"
            />
            <p>HTML5</p>
          </li>
          <li key="css" className="software-skill-inline" name="css">
            <img
              src="https://img.icons8.com/color/144/000000/css3.png"
              alt="something"
            />
            <p>CSS</p>
          </li>
          <li
            key="javascript"
            className="software-skill-inline"
            name="javascript"
          >
            <img
              src="https://img.icons8.com/color/144/000000/javascript.png"
              alt="something"
            />
            <p>Javascript</p>
          </li>
          <li key="mongo" className="software-skill-inline" name="mongo">
            <img
              src="https://img.icons8.com/color/144/000000/mongodb.png"
              alt="something"
            />
            <p>MongoDB</p>
          </li>
          <li key="react" className="software-skill-inline" name="react">
            <img
              src="https://img.icons8.com/plasticine/144/000000/react.png"
              alt="something"
            />
            <p>ReactJS</p>
          </li>
          <li
            key="bootstrap"
            className="software-skill-inline"
            name="bootstrap"
          >
            <img
              src="https://img.icons8.com/color/144/000000/bootstrap.png"
              alt="something"
            />
            <p>Bootstrap</p>
          </li>
          <li key="nodejs" className="software-skill-inline" name="nodejs">
            <img
              src="https://img.icons8.com/color/144/000000/nodejs.png"
              alt="something"
            />
            <p>NodeJS</p>
          </li>
          <li key="github" className="software-skill-inline" name="github">
            <img
              src="https://img.icons8.com/color/144/000000/github.png"
              alt="something"
            />
            <p>Github</p>
          </li>
          <li
            key="google-cloud"
            className="software-skill-inline"
            name="google-cloud"
          >
            <img
              src="https://img.icons8.com/color/144/000000/google-cloud.png"
              alt="something"
            />
            <p>google-cloud</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
