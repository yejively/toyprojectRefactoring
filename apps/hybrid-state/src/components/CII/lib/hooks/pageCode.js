import { useLocation } from 'react-router-dom';

const usePageCode = () => {
    const { pathname } = useLocation();
    return pathname;
};

export default usePageCode;
