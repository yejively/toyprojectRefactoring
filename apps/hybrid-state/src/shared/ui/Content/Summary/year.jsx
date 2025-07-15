import { yearSummary } from "./style.css";

const Year = ({ year }) => {
    return (
        <div className={yearSummary}>{year}</div>
    );
};

export default Year;
