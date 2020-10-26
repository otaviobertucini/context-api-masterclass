import React, { useContext } from "react";
import Third from "./Third";
import Context from './context';

const Second = () => {

  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          height: "75%",
          width: "75%",
          margin: "auto",
        }}
      >
        Segundo
        <Third></Third>
      </div>
    </>
  );
};

export default Second;
