import { button } from './style.css';

const Button = ({ info }) => {
    const {
        value,
        style,
        event: { type, useEvent },
    } = info;

    return (
        <button className={button[style]} data-value={value} data-type={type} data-event={useEvent}>
            {value}
        </button>
    );
};

export default Button;
