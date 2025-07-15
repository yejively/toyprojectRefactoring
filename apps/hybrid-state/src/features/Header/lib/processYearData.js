const processYearData = (yearList) => {
    return yearList.sort((a, b) => b - a)[0];
};

export default processYearData;
