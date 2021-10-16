import React from 'react';
import '../../styles/Resume.css'
import ResumeDoc from '../../assets/documents/resume.pdf'

export default function Resume() {
    return (

       <div className="resume-body">

           <h1 className="page-header">Resume</h1>

           <p className="para-text">Please click the below link to download a PDF copy of my resume.</p>

           <a className="res-link" href={ResumeDoc}>Download My Resume</a>
     
         
             <h2 className="section-header">Skills</h2>

             <div className="container">
                <div className="row">
                 
                 <div className="card">
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
                 </div>
            

                 <div className="card">
                 <h2 className="section-header">Back-End</h2>
                 <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL,Sequilize</li>
                    <li>MongoDB,Mongoose</li>
                    <li>REST API's</li>
                    <li>Apollo GraphQL</li>
                  

                 </ul>
                 </div>

                 <div className="card">
                 <h2 className="section-header">Other</h2>
                 <ul>
                    <li>Github</li>
                    <li>Heroku</li>
                    <li>Jest</li>
                    <li>Webpack</li>
                    <li>Confluence/Jira</li>
                    </ul>
                    </div>

                    </div>
                    </div>
                    </div>

      



    );
}