import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainLayoutPage = loadable(() => import('@/layouts').then(({ MainLayout }) => ({ default: MainLayout })));
const MainPage = loadable(() => import('@/pages').then(({ Main }) => ({ default: Main })));

function RouterData() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayoutPage />}>
                    <Route path="/cii" element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterData;
