import { Container, Tabs } from '@/features';
import { header } from './style.css';

export const Header = () => {
    return (
        <div className={header}>
            <Container />
            <Tabs />
        </div>
    );
};
