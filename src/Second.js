import React from 'react';
import Third from './Third';

const Second = ({ name }) => {
    return (<>
        <div style={{ backgroundColor: 'red', height: '75%', width: '75%', margin: 'auto' }}> 
        Test 
        <Third name={name}></Third>
        </div> 
        
    </>);
};

export default Second;