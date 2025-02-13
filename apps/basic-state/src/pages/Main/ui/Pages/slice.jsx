import { createSlice } from '@reduxjs/toolkit';
// createSlice는 내부적으로 immer 라이브러리를 사용한다. -> 기존 객체를 직접적으로 수정해도 불변성 유지로 이전 상태를 변경하지않고 새로운 상태를 생성.
const OPERATORS = ['÷', '×', '+', '-'];
const INITALIZE = 'C';
const DELETE = 'del';

const changeOperator = (state, value) => {
    state.history[state.history.length - 1] = value;
};

const appendToNumber = (state, value, lastHistory) => {
    state.history[state.history.length - 1] = lastHistory + value;
};

const resetCalculate = (state) => {
    state.value = null;
    state.history = [];
};

const deleteLastValue = (state, lastHistory, isLastOperator) => {
    if (isLastOperator || lastHistory.length === 1) state.history.pop();
    else state.history[state.history.length - 1] = lastHistory.slice(0, -1);
};

const processInput = (state, value, isNewOperator, isLastOperator, lastHistory) => {
    if (isNewOperator) {
        if (isLastOperator) changeOperator(state, value);
        else state.history.push(value);
    } else if (!isLastOperator && lastHistory !== '') {
        appendToNumber(state, value, lastHistory);
    } else {
        state.history.push(value);
    }
};

const slice = createSlice({
    name: 'input',
    initialState: { value: null, history: [] },
    reducers: {
        setValue: (state, action) => { // setValue 하나의 액션으로 모든 기능을 처리하고 있음.
            const value = action.payload;
            const lastHistory = state.history.at(-1) || '';
            const isLastOperator = OPERATORS.includes(lastHistory);
            const isNewOperator = OPERATORS.includes(value);

            if (!state.history.length && !Number(value)) return; // 첫 입력 값이 피연산자가 아닌 경우, 0인 경우 리턴

            state.value = value;

            if (value === INITALIZE) {
                resetCalculate(state);
            } else if (value === DELETE) {
                deleteLastValue(state, lastHistory, isLastOperator);
            } else {
                processInput(state, value, isNewOperator, isLastOperator);
            }
        },
    },
});

export const { setValue } = slice.actions;
export default slice.reducer;
