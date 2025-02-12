import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from './slice';
import { container, calculator } from './style.css';
import Button from './Button/Button';
import History from './Fields/History';
import Display from './Fields/Display';

const Main = () => {
    const input = useSelector(state => state.input);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('input: ', input);
    }, [input]);

    const handleInputAction = value => {
        dispatch(setValue(value));
    };

    return (
        <div className={container}>
            <div className={calculator}>
                <History text={input.history} />
                <Display text={input.display} />
                <Button click={handleInputAction} />
            </div>
        </div>
    );
};

export default Main;
