import { useSelector } from 'react-redux';
import { config } from '@/config';
import Text from './text';

const SummaryTextWrapper = ({ textObj }) => {
    const pageCode = useSelector(state => state.main.pageCode);
    const { summaryTitle } = config[pageCode].tab.monitoring;
    const summaryKeys = Object.keys(summaryTitle);

    return (
        <>
            {summaryKeys.map(key => {
                return <Text key={key} name={summaryTitle[key]} value={textObj[key]} />;
            })}
        </>
    );
};

export default SummaryTextWrapper;
