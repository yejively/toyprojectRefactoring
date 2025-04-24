import ButtonContainer from './Buttons';
import Field from './Fields';
import { calculator } from './style.css';

const Main = () => {
    return (
        <div className={calculator}>
            <Field />
            <ButtonContainer />
        </div>
    );
};

export default Main;
