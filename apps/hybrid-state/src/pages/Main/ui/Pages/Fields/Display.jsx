import { useSelector } from 'react-redux';
import { display } from './style.css';

const Display = () => {
    const displayvalue = useSelector(state => state.main.display);
    const result = useSelector(state => state.main.result);

    return (
        <>
            <div className={display}>{result || displayvalue}</div>
        </>
    );
};

export default Display;
