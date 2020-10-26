import React, { useState } from 'react';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const First = () => {

    const [name, setName] = useState();
    const [page, setPage] = useState(0);

    const pages = [
        {
            page: <Second name={name} setName={setName}></Second>,
        },
        {
            page: <Third name={name} setName={setName}></Third>,
        },
        {
            page: <Fourth name={name} setName={setName}></Fourth>,
        },
    ]

    return (<>
        <button onClick={() => setPage(old => old + 1)}>Clique para mudar de página</button>
        {React.cloneElement(pages[page % 3].page, null, null)}        
    </>);
};

export default First;