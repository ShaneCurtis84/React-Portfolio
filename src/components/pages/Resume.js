import React from "react";
import "../../styles/Resume.css";
import ResumeDoc from "../../assets/documents/resume.pdf";

export default function Resume() {
  return (
    <div className="resume-body">
  

      <h2 className="section-header">Skills</h2>

      <div className="container">
        <h2 className="section-header">Front-End</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>

        <h2 className="section-header">Back-End</h2>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL,Sequilize</li>
          <li>MongoDB,Mongoose</li>
          <li>REST API's</li>
          <li>Apollo GraphQL</li>
        </ul>

        <h2 className="section-header">Other Skills</h2>
        <ul>
          <li>Github</li>
          <li>Heroku</li>
          <li>Jest</li>
          <li>Webpack</li>
          <li>Confluence/Jira</li>
        </ul>
      </div>
    </div>
  );
}
