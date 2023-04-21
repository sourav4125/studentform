import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, { name, age, branch, cgpa }]);
    setName("");
    setAge("");
    setBranch("");
    setCgpa("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id='name'
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input id='name'
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <br />
        <label>
          Branch:
          <input id='name'
            type="text"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
          />
        </label>
        <br />
        <label>
          CGPA:
          <input id='name'
            type="number"
            step="0.01"
            value={cgpa}
            onChange={(event) => setCgpa(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th >Name</th>
            <th>Age</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.branch}</td>
              <td>{student.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentForm
