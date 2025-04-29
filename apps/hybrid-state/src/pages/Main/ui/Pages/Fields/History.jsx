import { history } from './style.css';

const History = ({ historyValue }) => {
    return (
        <>
            <div className={history}>{historyValue}</div>
        </>
    );
};

export default History;
