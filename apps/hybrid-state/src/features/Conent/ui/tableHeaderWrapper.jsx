import { TableHeader, UnitTableHeader } from '@/shared';
import { tableHeader, tableHeaderWrapper } from './style.css';

export const TableHeaderWrapper = ({ tableHeaderData, parsingTableHeader }) => {
    return (
        <div className={tableHeader}>
            <div className={tableHeaderWrapper}>
                {parsingTableHeader.map(i =>
                    typeof tableHeaderData[i] === 'object' ? (
                        <UnitTableHeader key={i} info={tableHeaderData[i]} />
                    ) : (
                        <TableHeader key={i} name={tableHeaderData[i]} />
                    ),
                )}
            </div>
        </div>
    );
};
