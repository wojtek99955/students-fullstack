import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3002/getStudents").then((res) =>
      setStudentsList(res.data)
    );
  }, []);

  const addStudent = () => {
    Axios.post("http://localhost:3002/createStudent", {
      name,
      age,
      email,
    }).then((res) => {
      alert("student created");
    });
  };
  return (
    <div className="App">
      <h1>Students</h1>
      {studentsList.map((student) => {
        return (
          <>
            <h1>{student.name}</h1>
            <div>{student.age}</div>
            <div>{student.email}</div>
          </>
        );
      })}
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addStudent}>add student</button>
    </div>
  );
}

export default App;
