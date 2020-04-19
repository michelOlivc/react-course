import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput"> 
            <p>Usuário: {props.userName}</p>
            <p>Qualquer coisa que precisa ser substituída</p>
        </div>
    );
};

export default userOutput;