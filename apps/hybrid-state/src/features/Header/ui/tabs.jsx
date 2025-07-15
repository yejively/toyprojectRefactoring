import { Tab, usePageCode, config } from '@/shared';
import { tabBox } from './style.css';

const Tabs = () => {
    const pageCode = usePageCode();
    const tabs = Object.values(config[pageCode].tab).map(i => i.displayName);

    return (
        <div className={tabBox}>
            {tabs.map(name => {
                return <Tab key={name} name={name} />;
            })}
        </div>
    );
};

export default Tabs;
