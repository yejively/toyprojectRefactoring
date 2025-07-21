import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePageCode, getYearList, LoadingSpinner } from '@/components/CII/lib';
import Header from '@/components/CII/Header';
import Body from '@/components/CII/Body';

const Main = () => {
    const dispatch = useDispatch();
    const pathname = usePageCode();
    const loading = useSelector(state => state.main.year.loading);

    useEffect(() => {
        dispatch(getYearList());
    }, [pathname]);

    if (loading) return <LoadingSpinner />;

    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};

export default Main;
