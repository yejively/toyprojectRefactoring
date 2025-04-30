import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainSlice } from '@/entities/Main';
import Button from './Button';
import { buttonContainer } from './style.css';

const ButtonContainer = () => {
    const dispatch = useDispatch();
    const Buttons = useSelector(state => state.main.buttons);

    const clickHandler = e => {
        if (e.target.tagName !== 'BUTTON' || e.target.dataset.event === 'false') return;

        const { value, type } = e.target.dataset;
        dispatch(mainSlice.actions.buttonAction({ value, type }));
    };

    return (
        <div className={buttonContainer} onClick={clickHandler}>
            {Buttons.map(item => (
                <Button key={item.value} info={item} />
            ))}
        </div>
    );
};

export default ButtonContainer;
