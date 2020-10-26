import React, { useContext, useEffect, useState } from "react";
import Context from './context';

const Fourth = () => {

  const { name } = useContext(Context);

  const [color, setColor] = useState(0);

//   useEffect(() => {
//     setColor(old => old + 1);
//   }, [name]);

  return (
    <>
      <div
        style={{
          backgroundColor: color % 2 === 0 ? 'grey' : 'pink',
          height: "50%",
          width: "50%",
          margin: "auto",
        }}
      >
        {name}
      </div>
    </>
  );
};

export default Fourth;
