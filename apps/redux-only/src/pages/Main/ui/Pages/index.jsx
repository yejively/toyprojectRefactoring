import ButtonContainer from './Buttons/ButtonContainer';
import Field from './Fields/Field';
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
