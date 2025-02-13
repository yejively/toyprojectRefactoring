import { React } from 'react';
import { container, calculator } from './style.css';
import Button from './Button/Button';
import History from './Fields/History';
import Display from './Fields/Display';

const Main = () => {
    return (
        <div className={container}>
            <div className={calculator}>
                <History />
                <Display />
                <Button />
            </div>
        </div>
    );
};

export default Main;
