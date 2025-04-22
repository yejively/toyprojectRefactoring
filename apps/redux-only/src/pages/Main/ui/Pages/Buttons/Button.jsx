import { useDispatch } from 'react-redux';
import { delayedFetch } from '@/entities/Main';
import { button } from './style.css';

const Button = ({ info }) => {
    const dispatch = useDispatch();

    const {
        value,
        style,
        event: { useEvent, type },
    } = info;

    const clickHandler = () => {
        if (!useEvent) return;
        dispatch(delayedFetch({ value, type }));
    };

    // 현재는 각 버튼에 이벤트핸들러가 설정돼있음
    // 버튼들의 부모 컨테이너에 하나의 이벤트핸들러를두고 이벤트위임을 시도

    return (
        <button className={button[style]} onClick={clickHandler}>
            {value}
        </button>
    );
};

export default Button;
