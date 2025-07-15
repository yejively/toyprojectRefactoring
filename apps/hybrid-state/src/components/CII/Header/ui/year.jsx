import { yearBox, yearButton } from './style.css';

const YearBox = ({ year, clickHandler }) => {
    return (
        <div className={yearBox}>
            <button onClick={clickHandler} className={yearButton}>
                <img id="prev" src="/arrow-left.svg" alt="arrow" />
            </button>
            <span>{year}</span>
            <button onClick={clickHandler} className={yearButton}>
                <img id="next" src="/arrow-right.svg" alt="arrow" />
            </button>
        </div>
    );
};

export default YearBox;
