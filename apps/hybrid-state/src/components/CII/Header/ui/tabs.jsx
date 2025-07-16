import Tab from './tab';
import { tabBox } from './style.css';

const Tabs = ({ config }) => {
    const tabs = Object.values(config.tab).map(i => i.displayName);

    return (
        <div className={tabBox}>
            {tabs.map(name => {
                return <Tab key={name} name={name} />;
            })}
        </div>
    );
};

export default Tabs;
