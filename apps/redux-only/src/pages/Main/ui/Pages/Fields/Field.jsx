import { useSelector } from 'react-redux';
import { history, display } from './style.css';

const Field = () => {
    const historyValue = useSelector(state => state.main.history);
    const displayValue = useSelector(state => state.main.display);
    const result = useSelector(state => state.main.result);

    return (
        <div>
            <div className={history}>{historyValue}</div>
            <div className={display}>{result || displayValue}</div>
        </div>
    );
};

export default Field;
