import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { one } from './slice';
import buttons from './config';
import * as style from './style.css';

const getButtonVariant = value => {
    if (['÷', '×', '-', '+'].includes(value)) return 'operator';
    if (value === 'C') return 'init';
    if (value === '=') return 'equal';
    if (value === 'del') return 'delete';
};

const Button = () => {
    const str = useSelector(state => state.changeStr.str);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('str: ', str);
    }, [str]);

    return (
        <div className={style.buttons}>
            {buttons.map(({ display, value }) => {
                return (
                    <button
                        key={value}
                        className={style.button({ value: getButtonVariant(value) })}
                        onClick={() => {
                            dispatch(one());
                        }}
                    >
                        {display}
                    </button>
                );
            })}
        </div>
    );
};

export default Button;
