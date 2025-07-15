import { Panel } from '@/shared';
import { panelWrapper, exDiv } from './style.css';

export const PanelWrapper = ({ myKey, rowData }) => {
    const dataValue = Object.values(rowData);
    let idx = -1;

    return (
        <div className={panelWrapper}>
            {dataValue.map(value => {
                idx++;
                return typeof value === 'object' && value !== null ? (
                    <div className={exDiv} key={`${myKey}_panel${idx}`}>object</div>
                ) : (
                    <Panel key={`${myKey}_panel${idx}`} value={value} />
                );
            })}
        </div>
    );
};
