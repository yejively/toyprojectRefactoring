import ButtonContainer from './Buttons';
import Field from './Fields';
import { container, calculator } from './style.css';

const Main = () => {
    return (
        <div className={container}>
            <div className={calculator}>
                <Field />
                <ButtonContainer />
            </div>
        </div>
    );
};

export default Main;
