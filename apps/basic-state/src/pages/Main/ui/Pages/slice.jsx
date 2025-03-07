import { createSlice } from '@reduxjs/toolkit';

const OPERATORS = ['÷', '×', '+', '-'];
const INITALIZE = 'C';
const DELETE = 'del';
const EQUAL = '=';

const replaceLastOperator = (state, value) => {
    state.history[state.history.length - 1] = value;
};

const appendToNumber = (state, value, lastHistory) => {
    state.history[state.history.length - 1] = lastHistory + value;
};

const resetCalculation = (state) => {
    state.history = [];
    state.result = null;
};

const deleteLastValue = (state) => {
    const lastHistory = state.history.at(-1) || '';
    const isLastOperator = OPERATORS.includes(lastHistory);

    if (isLastOperator || lastHistory.length === 1) state.history.pop();
    else state.history[state.history.length - 1] = lastHistory.slice(0, -1);
};

const handleInputValue = (state, value) => {
    const lastHistory = state.history.at(-1) || '';
    const isLastOperator = OPERATORS.includes(lastHistory);
    const isNewOperator = OPERATORS.includes(value);

    if (state.result) resetCalculation(state);

    if (isNewOperator) {
        if (isLastOperator) replaceLastOperator(state, value);
        else state.history.push(value);
    } else if (!isLastOperator && lastHistory !== '' && lastHistory !== '=') { // n번째 피연산자
        appendToNumber(state, value, lastHistory);
    } else {
        state.history.push(value);
    }
};

const calculate = (oper, numOne, numTwo) => {
    switch (oper) {
        case '+':
            return Number(numOne) + Number(numTwo);
        case '-':
            return Number(numOne) - Number(numTwo);
        case '×':
            return Number(numOne) * Number(numTwo);
        case '÷':
            return numTwo !== 0 ? Number(numOne) / Number(numTwo) : NaN;
        default:
            return NaN;
    }
};


const processOperators = (numArr, operArr, operatorsToProcess) => {
    let i = 0;
    while (i < operArr.length) {
        const operator = operArr[i];
        if (operatorsToProcess.includes(operator)) {
            const result = calculate(operator, numArr[i], numArr[i + 1]);
            numArr[i] = result;
            numArr.splice(i + 1, 1);
            operArr.splice(i, 1);
        } else {
            i++;
        }
    }
};

const evaluateExpression = (state) => {
    const numArr = state.history.filter(n => Number(n));
    const operArr = state.history.filter(n => !Number(n));

    processOperators(numArr, operArr, ['×', '÷']);
    processOperators(numArr, operArr, ['+', '-']);

    state.history.push('=');
    const [result] = numArr;
    state.result = result;
};

const slice = createSlice({
    name: 'input',
    initialState: { history: [], result: null },
    reducers: {
        setValue: (state, action) => {
            const value = action.payload;

            if (!state.history.length && !Number(value)) return; // 첫 입력 값이 피연산자가 아닌 경우, 0인 경우 리턴

            if (value === INITALIZE) {
                resetCalculation(state);
            } else if (value === DELETE) {
                deleteLastValue(state);
            } else if (value === EQUAL) {
                evaluateExpression(state);
            } else {
                handleInputValue(state, value);
            }
        },
    },
});

export const { setValue } = slice.actions;
export default slice.reducer;
