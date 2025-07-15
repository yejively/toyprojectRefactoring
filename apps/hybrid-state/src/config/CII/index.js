const config = {
    '/cii': {
        title: 'Carbon Intensity Indicators',
        logo: '/ic-CII.svg',
        switchUse: {
            yearMethod: true,
            exportMethod: true,
        },
        tab: {
            monitoring: {
                displayName: 'Monitoring',
                summary: true,
                summaryTitle: {
                    distanceTravelled: 'Distance',
                    avgSpeed: 'Avg. Speed',
                    totalCo2Emission: 'Total CO2',
                    requiredCii: 'Required CII',
                    attainedCii: 'Attained CII',
                    ciiRatingPercentValue: 'CII Rating(%)',
                },
                tableHeader: {
                    voyageNo: 'VOY',
                    legNo: 'LEG',
                    legBegin: 'Leg Begin',
                    legEnd: 'Leg End',
                    hoursUnderway: {
                        name: 'Hours UnderWay',
                        unit: '(Hours)',
                    },
                    distanceTravelled: {
                        name: 'Distance Travelied',
                        unit: '(NM)',
                    },
                    avgSpeed: 'Avg. Speed',
                    totalFoc: {
                        name: 'Total FOC',
                        unit: '(M/T)',
                    },
                    totalCo2Emission: {
                        name: 'Total CO2 Emission',
                        unit: '(tCO2)',
                    },
                    requiredCii: 'Required CII',
                    attainedCii: 'Attained CII',
                    ciiRatingPercentValue: {
                        name: 'CII Rating',
                        unit: '(%)',
                    },
                    ciiLabel: 'CII Rating',
                },
            },
            annualReport: {
                displayName: 'Annual Report',
            },
        },
    },
};

export default config;
