import React from 'react';
import './CharComponents.css';

const charComponent = (props) => {
    return <div className="CharComponents" onClick={props.click}>{props.char}</div>;
};

export default charComponent;