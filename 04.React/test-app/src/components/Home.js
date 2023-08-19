import Child from "./Child";
import imgOne from "../assets/watchs.jpg";
import { useState } from "react";

const Home = () => {
  const ab = "prince";
  const [state, setState] = useState("");

  const handleInput = (e) => {
    e.target.value = "Suman";
  };
  return (
    <div>
      <h2>Hello {ab}</h2>
      <h1>{state}</h1>
      <Child name={ab} />
      <img src={imgOne} alt="image of watch" width={200} />
      <input
        onChange={(e) => {
          setTimeout(5000);
          setState(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
