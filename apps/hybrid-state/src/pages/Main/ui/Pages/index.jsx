import { useState } from 'react';
import { handelType } from '@/features/calculate';
import ButtonContainer from './Buttons';
import Field from './Fields';
import { calculator } from './style.css';

const Main = () => {
    const [history, setHistory] = useState('');
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');
    const state = { history, display, result, setHistory, setDisplay, setResult };

    const getInfo = info => {
        handelType(state, info);
    };

    return (
        <div className={calculator}>
            <Field fieldValue={{ history, display, result }} />
            <ButtonContainer info={getInfo} />
        </div>
    );
};

export default Main;
