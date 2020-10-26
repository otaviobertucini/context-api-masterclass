import React, { useState } from "react";
import Second from "./Second";
import Context from "./context";

const First = () => {
  const [name, setName] = useState();

  const value = {
    name,
  };

  return (
    <>
      <Context.Provider value={value}>
        <input onChange={(event) => setName(event.target.value)}></input>
        <div
          style={{ backgroundColor: "green", height: "700px", width: "700px" }}
        >
          Primeiro
          <Second name={name}></Second>
        </div>
      </Context.Provider>
    </>
  );
};

export default First;
