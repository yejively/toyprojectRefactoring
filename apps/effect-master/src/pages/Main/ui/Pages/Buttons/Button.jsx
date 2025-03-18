import React from 'react';
import { Buttons } from './config';
import { buttonContainer, button } from './style.css';

const Button = ({ numberClick, operatorClick, initClick, deleteClick, equalClick }) => {
    const getClickEvent = (item) => {
        const { type } = item.event;
        const { value } = item;

        if (type === 'operator') return operatorClick(value);
        if (type === 'number') return numberClick(value);
        if (type === 'init') return initClick();
        if (type === 'delete') return deleteClick();
        if (type === 'equal') return equalClick();
    };

    return (
        <div className={buttonContainer}>
            {Buttons.map(item =>
                item.event.useEvent ? (
                    <button key={item.value} className={button({ value: item.style })} onClick={() => getClickEvent(item)}>
                        {item.value}
                    </button>
                ) : (
                    <button key={item.value} className={button({ value: item.style })}>
                        {item.value}
                    </button>
                ),
            )}
        </div>
    );
};

export default Button;
