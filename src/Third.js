import React from 'react';
import Fourth from './Fourth';

const Third = ({ name }) => {
    return (<>
        <div style={{ backgroundColor: 'yellow', height: '300px', width: '300px', margin: 'auto'}}>    
            Terceiro {name}    
        </div> 
    </>);
};

export default Third;