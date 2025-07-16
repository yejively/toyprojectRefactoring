import { useSelector } from 'react-redux';
import { config } from '@/config';
import Container from './ui/container';
import Tabs from './ui/tabs';
import { header } from './style.css';

const Header = () => {
    const pageCode = useSelector(state => state.main.pageCode);
    if (!pageCode) return;

    const pageConfig = config[pageCode];

    return (
        <div className={header}>
            <Container config={pageConfig} />
            <Tabs config={pageConfig} />
        </div>
    );
};

export default Header;
