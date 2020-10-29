import React from 'react';
import './Button.css';

const styles=['primaryBtn-style','outlineBtn-style'];
const sizes=['mediumBtn','largeBtn'];

export const Button = ({ children,type,onClick,buttonStyle,buttonSize }) =>{
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    var checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return(
        <button
        type={type}
        onClick={onClick}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        >
            {children}
        </button>
    )
}