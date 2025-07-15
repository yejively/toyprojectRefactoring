import { summaryTextBox, textTitle, textValue } from "./style.css";

const Level = ({ level }) => {
    return (
        <div className={summaryTextBox}>
            <div className={textTitle}>CII Rating</div>
            <div className={textValue}>
                <img src={`/rating/ic-small-${level}.svg`} alt="level" />
            </div>
        </div>
    );
};

export default Level;
