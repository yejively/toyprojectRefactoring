import { config } from '@/config';
import { usePageCode } from '../lib';
import Container from './ui/container';
import Tabs from './ui/tabs';
import { header } from './style.css';

const Header = () => {
    const pageCode = usePageCode();
    const pageConfig = config[pageCode];

    return (
        <div className={header}>
            <Container config={pageConfig} />
            <Tabs config={pageConfig} />
        </div>
    );
};

export default Header;
