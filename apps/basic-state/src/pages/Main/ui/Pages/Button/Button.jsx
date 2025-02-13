import React from 'react';
import { useDispatch } from 'react-redux';
import getButtonVariant from './style';
import buttons from './config';
import * as style from '../style.css';
import { setValue } from '../slice';

const Button = () => {
    const dispatch = useDispatch();

    const handleInputAction = value => {
        dispatch(setValue(value));
    };

    return (
        <div className={style.buttons}>
            {buttons.map(({ display, value }) => {
                return (
                    <button
                        key={value}
                        className={style.button({ value: getButtonVariant(value) })}
                        onClick={() => handleInputAction(value)}
                    >
                        {display}
                    </button>
                );
            })}
        </div>
    );
};

export default Button;
