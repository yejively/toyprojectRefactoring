import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getMainTableData } from '@/entities/Main';
import { parsingMainTableData } from '../lib';
import { PanelWrapper } from './panelWrapper';
import { mainTable, mainTableWrapper } from './style.css';

export const MainTableWrapper = ({ parsingTableHeader }) => {
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

// 1. 폴더구조
// 2. 디스패치 통합화
// 3. 망명규칙
// 4. 페이지단으로하기
// 5. key 값 idx 삭제
// 6. 6.23 코드리뷰
