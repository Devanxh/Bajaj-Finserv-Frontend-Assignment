import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import "./styles.css";

const EmployeeList = ({ employees }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [skillsFilter, setSkillsFilter] = useState([]);
  const [designationFilter, setDesignationFilter] = useState("");


  const filteredEmployees = employees.filter((employee) => {
    const employeeName = employee.name || ""; 
    return (
      employeeName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (designationFilter === "" || employee.designation === designationFilter) &&(skillsFilter.length === 0 || employee.skills.some((skill) => skillsFilter.includes(skill)))
    );
  });


  const handleCheckboxChange = (e) => {
    const skill = e.target.value;
    if (e.target.checked) {
      setSkillsFilter((prevFilters) => [...prevFilters, skill]);
    } else {
      setSkillsFilter((prevFilters) => prevFilters.filter((filter) => filter !== skill));
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      
      <select
          value={designationFilter}
          onChange={(e) => setDesignationFilter(e.target.value)}
        >
          <option value="">All Designations</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="QA Engineer">QA Engineer</option>
      
        </select>
      </div>
      <div className="skills-filter">
        <h3>Filter by Skills:</h3>
        <label>
          <input
            type="checkbox"
            value="Python"
            checked={skillsFilter.includes("Python")}
            onChange={handleCheckboxChange}
          />
          Python
        </label>
        <label>
          <input
            type="checkbox"
            value="Java"
            checked={skillsFilter.includes("Java")}
            onChange={handleCheckboxChange}
          />
          Java
        </label>
        <label>
          <input
            type="checkbox"
            value="JavaScript"
            checked={skillsFilter.includes("JavaScript")}
            onChange={handleCheckboxChange}
          />
          JavaScript
        </label>
        <label>
          <input
            type="checkbox"
            value="HTML"
            checked={skillsFilter.includes("HTML")}
            onChange={handleCheckboxChange}
          />
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            value="CSS"
            checked={skillsFilter.includes("CSS")}
            onChange={handleCheckboxChange}
          />
          CSS
        </label>
        <label>
          <input
            type="checkbox"
            value="Photoshop"
            checked={skillsFilter.includes("Photoshop")}
            onChange={handleCheckboxChange}
          />
          Photoshop
        </label>
        <label>
          <input
            type="checkbox"
            value="Manual Testing"
            checked={skillsFilter.includes("Manual Testing")}
            onChange={handleCheckboxChange}
          />
          Manual Testing
        </label>
        <label>
          <input
            type="checkbox"
            value="SQL"
            checked={skillsFilter.includes("SQL")}
            onChange={handleCheckboxChange}
          />
          SQL
        </label>
      </div>
      <div className="employee-list">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

