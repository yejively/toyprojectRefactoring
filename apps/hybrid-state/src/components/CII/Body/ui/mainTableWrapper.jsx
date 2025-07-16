import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getMainTableData } from '../../lib';
import parsingMainTableData from '../lib/processMainTableData';
import PanelWrapper from './panelWrapper';
import { mainTable, mainTableWrapper } from './style.css';

const MainTableWrapper = ({ parsingTableHeader }) => {
    const dispatch = useDispatch();
    const currentYear = useSelector(state => state.main.currentYear);
    const [mainTableData, setMainTableData] = useState(null);

    useEffect(() => {
        if (!currentYear) return;

        const fetchMainTableData = async () => {
            const res = await dispatch(getMainTableData(currentYear));
            setMainTableData(parsingMainTableData(parsingTableHeader, res.payload.success));
        };

        fetchMainTableData();
    }, [currentYear]);

    if (!mainTableData) return;

    return (
        <div className={mainTable}>
            <div className={mainTableWrapper}>
                {mainTableData.map(data => {
                    return <PanelWrapper key={data.id} myKey={data.id} rowData={data} />;
                })}
            </div>
        </div>
    );
};

export default MainTableWrapper;
