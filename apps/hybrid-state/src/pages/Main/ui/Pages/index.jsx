import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TestApi } from '@/entities/Main';
import ButtonContainer from './Buttons';
import Field from './Fields';
import { calculator } from './style.css';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TestApi());
    }, []);

    return (
        <div className={calculator}>
            <Field />
            <ButtonContainer />
        </div>
    );
};

export default Main;
