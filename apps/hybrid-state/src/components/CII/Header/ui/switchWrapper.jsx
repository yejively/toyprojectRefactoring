import { useDispatch, useSelector } from 'react-redux';
import { mainSlice } from '../../lib';
import YearBox from './year';

const SwitchWrapper = ({ config }) => {
    const dispatch = useDispatch();
    const currentYear = useSelector(state => state.main.currentYear);
    const { switchUse } = config;

    const yearClickHandler = e => {
        const type = e.target.id;
        dispatch(mainSlice.actions.changeYear(type));
    };

    return <>{switchUse.yearMethod && <YearBox year={currentYear} clickHandler={yearClickHandler} />}</>;
};

export default SwitchWrapper;
