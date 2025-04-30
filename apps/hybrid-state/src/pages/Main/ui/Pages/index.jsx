import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TestApi } from '@/entities/Main';
import ButtonContainer from './Buttons';
import Field from './Fields';
import { calculator } from './style.css';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TestApi()); // 하위 컴포넌트에서 api 호출하게되면, 컴포넌트 재렌더링 시 불필요하게 반복 호출이됨.
    }, []);

    return (
        <div className={calculator}>
            <Field />
            <ButtonContainer />
        </div>
    );
};

export default Main;

// 버튼 컨테이너에서 dispatch를쏴서 redux state 변경
// Field에서 감지 후 display나 history에서 감지 후 그걸 내부자체에서 변경할거면 내부 state로 사용
// ex) 2클릭 근데 display에선 3을 출력할때
