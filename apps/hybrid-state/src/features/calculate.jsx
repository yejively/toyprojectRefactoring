const OPERATOR = ['÷', '×', '-', '+'];

// 계산 처리 함수
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

const handleOperatorPrecedence = (numArr, operArr, operatorsToProcess) => {
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
// 계산 처리 함수

const updateResult = state => {
    if (!state.history || OPERATOR.includes(state.history.slice(-1))) return;

    const numArr = state.history.split(/[+\-×÷]/);
    const operArr = state.history.split(/\d+/).filter(Boolean);

    handleOperatorPrecedence(numArr, operArr, ['×', '÷']);
    handleOperatorPrecedence(numArr, operArr, ['+', '-']);

    state.result = `${numArr[0]}`;
    state.history = `${state.history}=`;
};

const init = state => {
    state.history = '';
    state.display = '';
    state.result = '';
};

const updateNumber = (state, value) => {
    if (state.result) init(state);
    state.display = value;
    state.history += value;
};

const resetWithResult = state => {
    const previousResult = state.result;
    init(state);
    updateNumber(state, previousResult);
};

const isLastCharOperator = state => {
    return OPERATOR.includes(state.history.slice(-1));
};

const updateOperator = (state, value) => {
    if (!state.history) return;

    if (isLastCharOperator(state)) {
        state.history = state.history.slice(0, -1) + value;
    } else {
        if (state.result) resetWithResult(state);
        state.history += value;
    }
};

const handelDelete = state => {
    if (!state.history || state.result) return;

    state.display = '';
    state.history = state.history.slice(0, -1);
};

export const handelType = (state, { value, type }) => {
    switch (type) {
        case 'number':
            updateNumber(state, value);
            break;
        case 'operator':
            updateOperator(state, value);
            break;
        case 'delete':
            handelDelete(state);
            break;
        case 'equal':
            updateResult(state);
            break;
        default:
            init(state);
            break;
    }
};
