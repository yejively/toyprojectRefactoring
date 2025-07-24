import { useDispatch, useSelector } from 'react-redux';
import { mainSlice } from '../../lib';
import { getYearChange } from '../lib/yaerClickHandler';
import YearBox from './year';

const SwitchWrapper = ({ config }) => {
    const dispatch = useDispatch();
    const currentYear = useSelector(state => state.main.year.currentYear);
    const { switchUse } = config;

    const yearClickHandler = e => {
        const type = getYearChange(e);
        dispatch(mainSlice.actions.changeYear(type));
    };

    return <>{switchUse.yearMethod && <YearBox year={currentYear} clickHandler={yearClickHandler} />}</>;
};

export default SwitchWrapper;
