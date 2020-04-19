import React from 'react';

const validation = (props) => {
    let message = 'Text too short';
    let style = {color: 'red'};

    if(props.textLength >= 5) {
        message = 'Text long enough';
        style.color = 'green';
    }

    return <span value={props.textLength} style={style}>{message}</span>;
};

export default validation;