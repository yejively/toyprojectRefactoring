import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePageCode, getYearList, mainSlice } from "./lib";
import Header from './Header';
import Body from './Body';

const MainContainer = () => {
    const dispatch = useDispatch();
    const pathname = usePageCode();

    useEffect(() => {
        dispatch(mainSlice.actions.setPageCode(pathname));
        dispatch(getYearList());
    }, [pathname]);

    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};

export default MainContainer;
