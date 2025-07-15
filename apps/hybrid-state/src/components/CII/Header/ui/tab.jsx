import { tabComponent } from "./style.css";

const Tab = ({ name }) => {
    return <div className={tabComponent}>{name}</div>;
};

export default Tab;

