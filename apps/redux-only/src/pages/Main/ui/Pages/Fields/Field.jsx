import { history, display } from './style.css';

const Field = ({ historyValue, displayValue }) => {
    return (
        <div>
            <div className={history}>{historyValue}</div>
            <div className={display}>{displayValue}</div>
        </div>
    );
};

export default Field;
