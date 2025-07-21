import { loading, spinner } from "./style.css";

const LoadingSpinner = () => {
    return (
        <div className={loading}>
            <img src="/spinner.svg" alt="loading..." className={spinner} />
        </div>
    );
};

export default LoadingSpinner;
