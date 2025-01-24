import loadable from '@loadable/component';
// loadable/componet - 코드 스플리팅과 동적 로딩을 쉽게 구현할 수 있는 도구로 성능 최적화와 사용자 경험을 개선하는 데 유용함
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// react-router-dom : 특정 URL에 따라 컴포넌트를 매핑하는 라우팅 기능을 설정.

const MainPage = loadable(() => import('@/pages/Main').then(({ Main }) => ({ default: Main })));
// MainPage 컴포넌트는 실제로 필요할 때만(path로 설정된 url로 접속시) 로드된다.(코드 스플리팅)

function RouterData() {
    return (
        <BrowserRouter>
            {/* URL을 관리하며, 애플리케이션에서 라우팅 기능을 활성화 */}
            <Routes>
                {/* 라우트를 정의하는 컨테이너 역할 */}
                <Route path="/" element={<MainPage />} />
                {/* 경로와 렌더링할 컴포넌트를 매핑(path="/" - 루트 경로) */}
            </Routes>
        </BrowserRouter>
    );
}

export default RouterData;
