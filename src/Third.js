import React from "react";
import Fourth from "./Fourth";

const Third = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          height: "50%",
          width: "50%",
          margin: "auto",
        }}
      >
        Terceiro
        <Fourth></Fourth>
      </div>
    </>
  );
};

export default Third;
