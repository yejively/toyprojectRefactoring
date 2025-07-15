import { summaryTextBox, textTitle, textValue } from "./style.css";

const Text = ({ name, value }) => {
    return (
        <div className={summaryTextBox}>
            <div className={textTitle}>{name}</div>
            <div className={textValue}>{value}</div>
        </div>
    );
};

export default Text;
