import { container, calculator } from './style.css';
import Button from './Button';
import History from './History';
import Display from './Display';

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
