import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePageCode, initApp } from '@/components/CII/lib';
import Header from '@/components/CII/Header';
import Body from '@/components/CII/Body';

const Main = () => {
    const dispatch = useDispatch();
    const pathname = usePageCode();
    const loading = useSelector(state => state.main.loading);

    useEffect(() => {
        dispatch(initApp());
    }, [pathname]);

    return (
        <div>
            {loading ? (
                <div>로딩중</div>
            ) : (
                <>
                    <Header />
                    <Body />
                </>
            )}
        </div>
    );
};

export default Main;
