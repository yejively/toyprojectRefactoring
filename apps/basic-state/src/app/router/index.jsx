import loadable from '@loadable/component'; // 페이지를 동적으로 불러오는 라이브러리
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // 페이지 라우팅을 설정하는 라이브러리

const MainPage = loadable(() => import('@/pages/Main').then(({ Main }) => ({ default: Main }))); // 메인 페이지를 동적으로 로드

function RouterData() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterData;
// BrowserRouter: url에 맞는 컴포넌트를 렌더링
// Routes: 여러개의 Route를 감싸는 컨테이너
// Route: 경로와 컴포넌트를 매핑
