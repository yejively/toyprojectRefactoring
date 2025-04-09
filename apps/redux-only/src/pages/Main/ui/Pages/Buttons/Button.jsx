import { useDispatch } from 'react-redux';
import { mainSlice } from '@/entities/Main';
import { button } from './style.css';

const Button = ({ info }) => {
    const {
        value,
        style,
        event: { useEvent, type },
    } = info;
    const dispatch = useDispatch();

    const clickHandler = () => {
        // 버튼이 개별적으로 렌더링 될 때마다 clickHandler가 새로 생성되는 문제
        dispatch(mainSlice.actions.buttonAction({ value, type }));
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

// 모든걸 extrareducer로 쓰기, reducer는 아예 사용하지않기.
// dispatch 쏘는 부분을 인라인으로 두지않기.
// 일반 함수를 호출해서 dispatch를 쏴라. ? 인라인 함수 문제점 ?
// 폴더 안의 Button.jsx, Field.jsx -> index.jsx로 변경
// field 분리 - useSelector 하나, 컴포넌트 하나 매핑
