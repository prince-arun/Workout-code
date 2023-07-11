import { UserId } from "../context/Context";

const Child = (props) => {
  const { cal, setCal } = UserId();

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
