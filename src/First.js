import React, { useState } from 'react';
import Second from './Second';

const First = () => {

    const [name, setName] = useState();

    return (<>
        <input onChange={event => setName(event.target.value)}></input>
        <div style={{ backgroundColor: 'green', height: '700px', width: '700px' }}> 
            Primeiro 
            <Second name={name}></Second>
        </div> 
        
    </>);
};

export default First;