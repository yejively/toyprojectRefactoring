import History from './History';
import Display from './Display';

const Field = ({ fieldValue }) => {
    const { history, display, result } = fieldValue;

    return (
        <>
            <History historyValue={history} />
            <Display displayValue={{ display, result }} />
        </>
    );
};

export default Field;
