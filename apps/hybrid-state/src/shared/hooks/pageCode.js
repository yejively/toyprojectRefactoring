import { useLocation } from 'react-router-dom';

const usePageCdoe = () => {
    const { pathname } = useLocation();
    return pathname;
};

export default usePageCdoe;
