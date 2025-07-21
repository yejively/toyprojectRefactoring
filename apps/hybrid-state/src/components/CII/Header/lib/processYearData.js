const processYearData = (yearList) => {
    return {
        firstYear: yearList[0],
        lastYear: yearList[yearList.length - 1],
    };
};

export default processYearData;
