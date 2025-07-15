const parsingMainTableData = (parsingTableHeader, responseData) => {
    const parsedData = responseData.map((data, idx) => {
        const parsedRow = {};
        parsingTableHeader.forEach(header => {
            parsedRow[header] = data[header];
        });
        parsedRow.id = idx;
        return parsedRow;
    });

    return parsedData;
};

export default parsingMainTableData;
