import { useSelector } from 'react-redux';
import { config } from '@/config';
import TableHeaderWrapper from './tableHeaderWrapper';
import MainTableWrapper from './mainTableWrapper';

const Monitoring = () => {
    const pageCode = useSelector(state => state.main.pageCode);
    if (!pageCode) return;

    const tableHeaderData = config[pageCode].tab.monitoring.tableHeader;
    const parsingTableHeader = Object.keys(tableHeaderData);

    return (
        <div>
            <TableHeaderWrapper tableHeaderData={tableHeaderData} parsingTableHeader={parsingTableHeader} />
            <MainTableWrapper parsingTableHeader={parsingTableHeader} />
        </div>
    );
};

export default Monitoring;
