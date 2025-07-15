import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainLayoutPage = loadable(() => import('@/widgets/MainLayout').then(({ MainLayout }) => ({ default: MainLayout })));
const MainPage = loadable(() => import('@/pages/Main').then(({ Main }) => ({ default: Main })));

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
