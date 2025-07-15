import { headerInfo } from "./style.css";

const HeaderInfo = ({ url, name }) => {
    return (
        <div className={headerInfo}>
            <img src={url} alt="CII" />
            <div>{name}</div>
        </div>
    );
};

export default HeaderInfo;
