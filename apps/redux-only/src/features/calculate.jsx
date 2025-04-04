// 계산 함수
const performOperation = (oper, numOne, numTwo) => {
    const n1 = Number(numOne);
    const n2 = Number(numTwo);

    switch (oper) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '×':
            return n1 * n2;
        case '÷':
            return n2 !== 0 ? n1 / n2 : 'Error';
        default:
            return 'Error';
    }
};

// 연산자 우선순위 처리 함수
export const handleOperatorPrecedence = (numArr, operArr, operatorsToProcess) => {
    let i = 0;
    while (i < operArr.length) {
        if (operatorsToProcess.includes(operArr[i])) {
            const res = performOperation(operArr[i], numArr[i], numArr[i + 1]);
            numArr[i] = res;
            numArr.splice(i + 1, 1);
            operArr.splice(i, 1);
        } else {
            i++;
        }
    }
};
