import { useSelector } from 'react-redux';
import { history, display } from './style.css';

const Field = () => {
    const historyValue = useSelector(state => state.main.history);
    const displayValue = useSelector(state => state.main.display);
    const result = useSelector(state => state.main.result);
    // const { h, d, r } =  useSelector(state => state.main);
    // 위 main객체를 가져와 구조분해 할당 시 문제점 : main의 어떤 속성 하나라도 바뀌면 이 훅을 사용하는 컴포넌트 전체가 리렌더링됨
    return (
        <div>
            <div className={history}>{historyValue}</div>
            <div className={display}>{result || displayValue}</div>
        </div>
    );
};

export default Field;
