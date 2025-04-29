import { Buttons } from './config';
import Button from './Button';
import { buttonContainer } from './style.css';

const ButtonContainer = ({ info }) => {
    const clickHandler = e => {
        if (e.target.tagName !== 'BUTTON' || e.target.dataset.event === 'false') return;

        const { value, type } = e.target.dataset;
        info({ value, type });
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
