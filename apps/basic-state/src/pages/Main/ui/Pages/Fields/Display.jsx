import React from 'react';
import { display } from '../style.css';

const Display = ({ text }) => {
    return <div className={display}>{text}</div>;
};

export default Display;
