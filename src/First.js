import React, { useState } from "react";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Context from "./context";

const First = () => {
  const [name, setName] = useState();
  const [page, setPage] = useState(0);

  const value = {
    name,
    setName,
  };

  const pages = [
    {
      page: <Second></Second>,
    },
    {
      page: <Third></Third>,
    },
    {
      page: <Fourth></Fourth>,
    },
  ];

  return (
    <>
      <button onClick={() => setPage((old) => old + 1)}>
        Clique para mudar de página
      </button>
      <Context.Provider value={value}>
        {React.cloneElement(pages[page % 3].page, null, null)}
      </Context.Provider>
    </>
  );
};

export default First;
