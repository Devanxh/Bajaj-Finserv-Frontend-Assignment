import React from "react";
import ProjectTable from "./ProjectTable";
import "./styles.css";

const EmployeeCard = ({ employee }) => {
  const { name, designation, skills, projects } = employee;

  return (
    <div className="employee-card">
      <h2>{name}</h2>
      <p>Designation: {designation}</p>
      <p>Skills: {skills.join(", ")}</p>

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
