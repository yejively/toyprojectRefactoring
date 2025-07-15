import { config, usePageCode } from '@/shared';
import { TableHeaderWrapper } from './tableHeaderWrapper';
import { MainTableWrapper } from './mainTableWrapper';

const Monitoring = () => {
    const pageCode = usePageCode();
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
