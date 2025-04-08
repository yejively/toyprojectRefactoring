import { useDispatch } from 'react-redux';
import { mainSlice } from '@/entities/Main';
import { button } from './style.css';

const Button = ({ info }) => {
    const { value, style, event: { useEvent, type } } = info;
    const dispatch = useDispatch();

    if (useEvent) {
        return (
            <button className={button[style]} onClick={() => dispatch(mainSlice.actions.buttonAction({ value, type }))}>
                {value}
            </button>
        );
    }

    return <button className={button[style]}>{value}</button>;
};

export default Button;
