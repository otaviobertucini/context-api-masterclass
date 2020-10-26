import React, { useContext } from 'react';
import Context from './context';

const Second = () => {

    const { name, setName } = useContext(Context);

    return (<>
        <div style={{ backgroundColor: 'red', height: '300px', width: '300px', margin: 'auto' }}> 
            Segundo {name}
            <input onChange={event => setName(event.target.value)}></input>
        </div> 
        
    </>);
};

export default Second;