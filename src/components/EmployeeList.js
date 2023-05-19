import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import "./styles.css";

const EmployeeList = ({ employees }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");

  // Filter employees based on search query and designation filter
  const filteredEmployees = employees.filter((employee) => {
    const employeeName = employee.name || ""; // Provide a default empty string if name is null
    return (
      employeeName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (designationFilter === "" || employee.designation === designationFilter)
    );
  });

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
          <option value="Developer">Developer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="QA Engineer">QA Engineer</option>
      
        </select>
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
