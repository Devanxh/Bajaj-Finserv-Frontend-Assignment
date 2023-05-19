import React from "react";
import "./styles.css";

const ProjectTable = ({ tasks, team }) => {
  const completedTasks = tasks
    ? tasks.filter((task) => task.status === "Completed")
    : [];

  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>Team Member</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {team.map((member) => (
          <tr key={member.name}>
            <td>{member.name}</td>
            <td>{member.role}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Completed Tasks: {completedTasks.length}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProjectTable;
