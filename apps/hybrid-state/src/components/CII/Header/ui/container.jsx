import HeaderInfo from './headerInfo';
import SwitchWrapper from './switchWrapper';
import { headerBox } from './style.css';

const Container = ({ config }) => {
    const { logo, title } = config;

    return (
        <div className={headerBox}>
            <HeaderInfo url={logo} name={title} />
            <SwitchWrapper config={config} />
        </div>
    );
};

export default Container;
