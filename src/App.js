import React, { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from API endpoint
    fetch(
      "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
    )
      .then((response) => response.json())
      .then((data) => setEmployees(data.employees))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <h1>Bajaj Finserv Health || Frontend Assignment</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
