import React, { useContext } from 'react';
import Context from './context';


const Fourth = () => {
    const { name, setName } = useContext(Context);
    return (<>
        <div style={{ backgroundColor: 'grey', height: '300px', width: '300px', margin: 'auto' }}> 
            <input onChange={event => setName(event.target.value)}></input>
        </div> 
    </>);
};

export default Fourth;