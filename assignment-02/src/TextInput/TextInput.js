import React from 'react';

const textInput = (props) => {
    return (
        <input 
            id="inputText" 
            type="text" 
            value={props.textInputed} 
            onChange={props.changed} />);
};

export default textInput;