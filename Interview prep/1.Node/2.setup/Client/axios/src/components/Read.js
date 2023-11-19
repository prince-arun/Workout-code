import React, { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
  const [students, setStudents] = useState([]);
  const [isMount, setIsMount] = useState(true);
  const getData = () => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => {
        if (isMount) {
          setStudents(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
    return () => {
      setIsMount(false);
    };
  }, []);
  console.log(students);
  return (
    <div className="read text-center">
      <h1>welcome to Read/Get page</h1>
      <button onClick={getData}>Click to render</button>

      {students.map((student) => (
        <div key={student._id}>
          <p>ID : {student._id}</p>
          <p>Name : {student.name}</p>
          <p>Age : {student.age}</p>
          <p>Conduct : {student.isGood}</p>
        </div>
      ))}
    </div>
  );
};

export default Read;
