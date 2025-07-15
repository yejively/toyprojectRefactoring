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

// FSD 구조에서 config 배치
// 결정 기준: ocnfig의 책임과 의미
// 판단 기준
// 1. headerConfig가 앱 전체에서 사용? - Header에서만 사용됨.
// 2. 다른 feature에서도 이 config를 참조? - Header 렌더링에서만 사용됨.
// 3. config 구조가 Header 기능에 맞춘 구조? - o
// 즉 headerConfig는 재사용 가능한 config가 아니라 Header 렌더링을 위한 구조화된 데이터.
