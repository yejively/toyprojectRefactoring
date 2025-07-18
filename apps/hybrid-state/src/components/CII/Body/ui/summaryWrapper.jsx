import { config } from '@/config';
import { usePageCode } from '../../lib';
import Text from './text';

const SummaryTextWrapper = ({ textObj }) => {
    const pageCode = usePageCode();
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
