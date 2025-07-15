import { Container, Tabs } from '@/components/CII/Header';
import { header } from './style.css';

export const Header = () => {
    return (
        <div className={header}>
            <Container />
            <Tabs />
        </div>
    );
};
