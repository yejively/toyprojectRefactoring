import { useDispatch } from 'react-redux';
import { delayedFetch } from '@/entities/Main';
import { button } from './style.css';

const Button = ({ info }) => {
    const {
        value,
        style,
        event: { useEvent, type },
    } = info;

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(delayedFetch({ value, type }));
    };

    return useEvent ? (
        <button className={button[style]} onClick={clickHandler}>
            {value}
        </button>
    ) : (
        <button className={button[style]}>{value}</button>
    );
};

export default Button;
