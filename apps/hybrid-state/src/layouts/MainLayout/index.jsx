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
