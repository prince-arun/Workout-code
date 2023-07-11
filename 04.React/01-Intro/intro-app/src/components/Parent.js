import Child from "./Child";
import { UserId } from "../context/Context";

const Parent = () => {
  const user = "prince";
  const age = 24;

  const { cal, setCal } = UserId();

  return (
    <div className="parent">
      <h1>{cal}</h1>
      <Child user={user} age={age} />
    </div>
  );
};

export default Parent;
