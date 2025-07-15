import { panel } from './style.css';

const Panel = ({ value }) => {
    return (
        <>
            <div className={panel}>{value}</div>
        </>
    );
};

export default Panel;
