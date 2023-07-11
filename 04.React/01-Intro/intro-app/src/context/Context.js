import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const user = createContext();

const Context = ({ children }) => {
  const [cal, setCal] = useState("");

  useEffect(() => {
    const id = 50 * 4;
    setCal(id);
  }, []);

  return (
    <div className="context">
      <user.Provider value={{ cal, setCal }}>{children}</user.Provider>
    </div>
  );
};

export const UserId = () => {
  return useContext(user);
};

export default Context;
