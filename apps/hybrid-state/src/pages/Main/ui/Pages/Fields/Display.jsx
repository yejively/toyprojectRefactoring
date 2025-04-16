import { useSelector } from 'react-redux';
import { display } from './style.css';

const Display = () => {
    const displayValue = useSelector(state => state.main.display);
    const result = useSelector(state => state.main.result);

    return (
        <>
            <div className={display}>{result || displayValue}</div>
        </>
    );
};

export default Display;
