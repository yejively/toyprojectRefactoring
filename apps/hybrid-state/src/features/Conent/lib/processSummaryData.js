const processSummaryData = parseSummaryData => {
    const keys = Object.keys(parseSummaryData);

    return keys.reduce((acc, i) => {
        if (i === 'year' || i === 'ciiLabel') {
            acc[i] = parseSummaryData[i];
        } else {
            acc.text[i] = parseSummaryData[i];
        }
        return acc;
    }, { year: '', text: {}, ciiLabel: '' });
};

const parsingSummaryData = (currentYear, summaryData) => {
    const parsingData = summaryData.filter(i => {
        return i.year === currentYear;
    });

    return processSummaryData(parsingData[0]);
};

export default parsingSummaryData;
