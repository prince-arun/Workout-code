import { UserId } from "../context/Context";
import React, { useReducer } from "react";

const Child = (props) => {
  const { cal, setCal } = UserId();
  // const [state, setState] = useState('')
  // const [state, dispatc] = useReducer(reducer, initalvalue);

  setCal(240);
  return (
    <div className="child">
      <h1>{props.user}</h1>
      <h1>{props.age}</h1>
      <h2>{cal}</h2>
    </div>
  );
};

export default Child;
