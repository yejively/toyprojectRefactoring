import { HeaderInfo, usePageCode, config } from '@/shared';
import SwitchWrapper from './switchWrapper';
import { headerBox } from './style.css';

const Container = () => {
    const pageCode = usePageCode();
    const { logo, title } = config[pageCode];

    return (
        <div className={headerBox}>
            <HeaderInfo url={logo} name={title} />
            <SwitchWrapper pageCode={pageCode} />
        </div>
    );
};

export default Container;
