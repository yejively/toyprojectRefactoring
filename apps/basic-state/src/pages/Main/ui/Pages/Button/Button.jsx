import React from 'react';
import buttons from './config';
import * as style from '../style.css';

const getButtonVariant = value => {
    if (['÷', '×', '-', '+'].includes(value)) return 'operator';
    if (value === 'C') return 'init';
    if (value === '=') return 'equal';
    if (value === 'del') return 'delete';
};

const Button = ({ click }) => {
    return (
        <div className={style.buttons}>
            {buttons.map(({ display, value }) => {
                return (
                    <button key={value} className={style.button({ value: getButtonVariant(value) })} onClick={() => click(value)}>
                        {display}
                    </button>
                );
            })}
        </div>
    );
};

export default Button;
