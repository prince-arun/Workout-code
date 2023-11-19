import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    age: "",
    isGood: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/students`, value)
      .then((res) => {
        console.log(res);
        navigate("/read");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create">
      <h1>Welcome to Create/Post page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">First Name</label> {"   "}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="first name"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <label htmlFor="age">age</label> {"   "}
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          onChange={(e) => setValue({ ...value, age: e.target.value })}
        />
        <label htmlFor="conduct">Conduct</label> {"   "}
        <input
          type="text"
          name="conduct"
          id="conduct"
          placeholder="conduct"
          onChange={(e) => setValue({ ...value, isGood: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
