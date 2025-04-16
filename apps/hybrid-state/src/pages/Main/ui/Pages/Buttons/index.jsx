import React from 'react';
import Buttons from './config';
import Button from './Button';
import { buttonContainer } from './style.css';

const ButtonContainer = () => {
    return (
        <div className={buttonContainer}>
            {Buttons.map(item => <Button key={item.value} info={item} />)}
        </div>
    );
};

export default ButtonContainer;
