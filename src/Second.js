import React from 'react';
import Third from './Third';

const Second = ({ name, setName }) => {
    return (<>
        <div style={{ backgroundColor: 'red', height: '300px', width: '300px', margin: 'auto' }}> 
            Segundo {name}
            <input onChange={event => setName(event.target.value)}></input>
        </div> 
        
    </>);
};

export default Second;