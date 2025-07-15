import { Outlet } from 'react-router-dom';
import { nav } from './style.css';

const MainLayout = () => {
    return (
        <div>
            <div className={nav} />
            <Outlet />
        </div>
    );
};

export default MainLayout;

/*
    React Reouter의 Outer 컴포넌트:
    중첩된 라우트를 렌더링하는 데 사용한다.
    즉, 부모 라우트가 자식 라우트를 포함하고 있을 때,
    부모 라우트의 레이아웃이나 공통 UI 요소를 렌더링하면서,
    자식 라우트의 컴포넌트를 특정 위치에 렌더링하는 역할
*/
