import { useSelector } from 'react-redux';
import { history } from './style.css';

const History = () => {
    const historyValue = useSelector(state => state.main.history);

    return (
        <>
            <div className={history}>{historyValue}</div>
        </>
    );
};

export default History;
