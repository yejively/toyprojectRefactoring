const OPERATOR = ['÷', '×', '-', '+'];

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

const init = state => {
    state.history = '';
    state.display = '';
    state.result = '';
    state.operator = { value: '', type: null };
    state.init = false;
    state.del = false;
    state.equal = false;
};

const updateNumber = (state, value) => {
    if (state.result) return;

    state.display = value;
    state.history += value;
};

const updateOperator = (state, value) => {
    if (!state.history) return;

    if (OPERATOR.includes(state.history.slice(-1))) {
        // 연산자 교체
        state.history = state.history.slice(0, -1) + value;
    } else if (state.result) {
        // 결과 값이 있고 연산자 클릭 시 결과값에 새로운 계산 시작
        const previousResult = state.result;
        // 리셋
        init(state);
        updateNumber(state, previousResult);
        state.history += value;
    } else {
        // 연산자 입력 처리
        state.history += value;
    }
};

const handelDelete = state => {
    if (!state.history || state.result) return;

    state.display = '';
    state.history = state.history.slice(0, -1);
};

const updateResult = state => {
    if (!state.history || OPERATOR.includes(state.history.slice(-1))) return;

    const numArr = state.history.split(/[+\-×÷]/);
    const operArr = state.history.split(/\d+/).filter(Boolean);

    handleOperatorPrecedence(numArr, operArr, ['×', '÷']);
    handleOperatorPrecedence(numArr, operArr, ['+', '-']);

    state.result = `${numArr[0]}`;
    state.history = `${state.history}=`;
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
