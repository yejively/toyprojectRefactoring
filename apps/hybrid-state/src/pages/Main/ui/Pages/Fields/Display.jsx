import { display } from './style.css';

const Display = ({ displayValue }) => {
    return (
        <>
            <div className={display}>{displayValue.result || displayValue.display}</div>
        </>
    );
};

export default Display;
