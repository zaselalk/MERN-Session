import { useEffect, useState } from "react";

export default function Student() {
  const [studentsData, setStudentsData] = useState([]);

  async function getStudents() {
    const data = await fetch("http://localhost:3000/students");
    const students = await data.json();
    setStudentsData(students);
  }

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      <h1>Students</h1>
      {studentsData.map((student) => {
        return (
          <li key={student.name}>
            {student.name} - {student.age}
          </li>
        );
      })}
    </>
  );
}
