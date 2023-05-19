import React from "react";
import ProjectTable from "./ProjectTable";
import "./styles.css";

const EmployeeCard = ({ employee }) => {
  let { name, designation, skills, projects } = employee;

  return (
    <div className="employee-card"> 
      {
        name == null ? name = <h1>*Name Missing*</h1>: name = <h1>{name}</h1>
      }
      {/* <h2>{name}</h2> */}
      <p >Designation: {designation}</p>
      <p>Skills: {skills.join(", ")}</p>
      <hr></hr>
      <h3>Projects</h3>
      {projects &&
        projects.map((project) => (
          <div key={project.name}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <ProjectTable tasks={project.tasks} team={project.team} />
          </div>
        ))}
    </div>
  );
};

export default EmployeeCard;
