import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getYearList, mainSlice } from '@/entities/Main';
import { Header } from '@/pages/CII/Header';
import { Content } from '@/pages/CII/Body';
import usePageCode from '@/hooks';

const Main = () => {
    const dispatch = useDispatch();
    const pathname = usePageCode();

    useEffect(() => {
        dispatch(mainSlice.actions.setPageCode(pathname));
        dispatch(getYearList());
    }, [pathname]); // 단일화

    return (
        <div>
            <Header />
            <Content />
        </div>
    );
};

export default Main;
