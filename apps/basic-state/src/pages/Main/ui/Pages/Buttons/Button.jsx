import React from 'react';
import { Buttons } from './config';
import { buttonContainer, button } from './style.css';

const Button = ({ numberClick, operatorClick, initClick, deleteClick, equalClick }) => {
    const getClickEvent = ({ name, type }) => {
        if (type === 'init') return initClick();
        if (type === 'operator') return operatorClick(name);
        if (type === 'default') return numberClick(name);
        if (type === 'delete') return deleteClick();
        if (type === 'equal') return equalClick();
    };

    return (
        <div className={buttonContainer}>
            {Buttons.map(item =>
                item.isEvent ? (
                    <button key={item.name} className={button({ value: item.type })} onClick={() => getClickEvent(item)}>
                        {item.name}
                    </button>
                ) : (
                    <button key={item.name} className={button({ value: item.type })}>
                        {item.name}
                    </button>
                ),
            )}
        </div>
    );
};

export default Button;
