import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@/pages/Main').then(({ Main }) => ({ default: Main })));

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
