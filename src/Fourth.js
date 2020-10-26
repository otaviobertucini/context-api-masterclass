import React from 'react';

const Fourth = ({ name, setName }) => {
    return (<>
        <div style={{ backgroundColor: 'grey', height: '300px', width: '300px', margin: 'auto' }}> 
            <input onChange={event => setName(event.target.value)}></input>
        </div> 
    </>);
};

export default Fourth;