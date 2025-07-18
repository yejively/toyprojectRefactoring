// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getSummaryData } from '../../lib';
// import Year from './year';
// import Level from './level';
// import SummaryTextWrapper from './summaryWrapper';
// import parsingSummaryData from '../lib/processSummaryData';
// import { summary } from './style.css';

const Summary = () => {
    // const dispatch = useDispatch();
    // const currentYear = useSelector(state => state.main.currentYear);
    // const [summaryData, setSummaryData] = useState(null);

    // useEffect(() => {
    //     if (!currentYear) return;

    //     dispatch(getSummaryData()).then(res => {
    //         setSummaryData(parsingSummaryData(currentYear, res.payload));
    //     });
    // }, [currentYear]);

    // if (!summaryData) return;

    return (
        <></>
        // <div className={summary}>
        //     <Year year={summaryData.year} />
        //     <SummaryTextWrapper textObj={summaryData.text} />
        //     <Level level={summaryData.ciiLabel} />
        // </div>
    );
};

export default Summary;
