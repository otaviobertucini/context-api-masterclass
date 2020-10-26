import React, { useContext } from "react";
import Fourth from "./Fourth";
import Context from "./context";

const Third = () => {
  const { name, setName } = useContext(Context);
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          height: "300px",
          width: "300px",
          margin: "auto",
        }}
      >
        Terceiro {name}
      </div>
    </>
  );
};

export default Third;
