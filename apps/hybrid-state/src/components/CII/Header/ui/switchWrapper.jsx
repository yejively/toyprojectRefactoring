import { useDispatch, useSelector } from 'react-redux';
import { mainSlice } from '@/entities/Main';
import { config } from '@/config';
import YearBox from './year';

const SwitchWrapper = ({ pageCode }) => {
    const dispatch = useDispatch();
    const currentYear = useSelector(state => state.main.currentYear);
    const { switchUse } = config[pageCode];

    const yearClickHandler = e => {
        const type = e.target.id;
        dispatch(mainSlice.actions.changeYear(type));
    };

    return <>{switchUse.yearMethod && <YearBox year={currentYear} clickHandler={yearClickHandler} />}</>;
};

export default SwitchWrapper;
