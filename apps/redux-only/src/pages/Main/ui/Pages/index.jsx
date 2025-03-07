import { useDispatch, useSelector } from 'react-redux';
import { mainSlice, TestApi } from '@/entities/Main';

import { FontColor } from './style.css';
import { ColorTag } from './style';

const Main = () => {
    const dispatch = useDispatch();
    const isTest = useSelector(state => state.main.isTest);
    const isSetTest = useSelector(state => state.main.isSetTest);
    const test = () => {
        dispatch(mainSlice.actions.dataChange(!isTest));
    };

    const eventTest = () => {
        dispatch(TestApi());
    };

    return (
        <>
            <ColorTag>{isSetTest}</ColorTag>
            <button className={FontColor} onClick={test}>
                테스트
            </button>
            <button className={FontColor} onClick={eventTest}>
                Api Test
            </button>
            {isTest ? 'true' : 'false'}
        </>
    );
};

export default Main;
