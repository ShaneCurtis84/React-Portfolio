import React from "react";
import projects from "../Projects";
import "../../styles/Project.css";

export default function Project() {
  return (
    <div className="project-body">
      <h1 className="page-header">My Projects</h1>

      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="card-01" key={project.title}>
              <div className="card-header">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>

              <div className="card-body">
                <a href={project.website}>
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.alt}
                  ></img>
                </a>
                <div className="card-footer">
                  <p>{project.tech}</p>
                  <a id="card-icon" href={`${project.gitHub}`}>
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
