import Panel from './panel';
import LegTimeLine from './legTimeLine';
import Dropdown from './dropdown';
import { panelWrapper } from './style.css';

const PanelWrapper = ({ rowData }) => {
    const datas = Object.entries(rowData).filter(([key]) => key !== 'id');

    return (
        <div className={panelWrapper}>
            {datas.map(([key, value]) => {
                return typeof value === 'object' && value !== null ? <LegTimeLine key={key} value={value} /> : <Panel key={key} value={value} />;
            })}
            <Dropdown />
        </div>
    );
};

export default PanelWrapper;
