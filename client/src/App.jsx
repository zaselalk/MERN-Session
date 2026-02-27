import { useEffect, useState } from "react";
import Form from "./components/Form";
import { NavLink, Route, Routes } from "react-router";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Navigation</h1>
      <ul>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Student</NavLink>
        </li>
      </ul>

      {/* <Form onSubmit={getStudents} /> */}

      <Routes>
        <Route path="/students" element={<Student />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
