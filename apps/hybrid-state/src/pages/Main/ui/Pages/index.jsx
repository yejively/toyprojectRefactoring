import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getYearList, mainSlice } from '@/entities/Main';
import { Header } from '@/pages/Main/ui/Header';
import { Content } from '@/pages/Main/ui/Content';
import { usePageCode } from '@/shared';

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
