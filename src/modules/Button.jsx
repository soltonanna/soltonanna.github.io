import React from 'react';

const Button = (props) => {
    const classes = `button ${props.className ? props.className : '' }`;
    
    return (
        <button 
            onClick={props.onClick} 
            className={classes}
            value={props.value}
        >
            {props.children}
        </button>
    )
}

export default Button;