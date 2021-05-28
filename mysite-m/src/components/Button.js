import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn-small','btn-medium', 'btn--large'];

export const Button = ({
    children, type, onClick, buttonStyle, buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize: SIZES[0];

    return (
        <></>
    )

}