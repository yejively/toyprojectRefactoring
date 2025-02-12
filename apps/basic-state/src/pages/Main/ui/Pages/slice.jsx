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
    if (isLastOperator) state.history.pop();
    else state.history[state.history.length - 1] = lastHistory.slice(0, -1);
};

const slice = createSlice({
    name: 'input',
    initialState: { value: null, history: [] },
    reducers: {
        setValue: (state, action) => {
            const value = action.payload;
            const lastHistory = state.history.at(-1) || '';
            const isLastOperator = OPERATORS.includes(lastHistory);
            const isNewOperator = OPERATORS.includes(value);

            if (!state.history.length && !Number(value)) return; // 첫 입력 값이 피연산자가 아닌 경우 리턴

            state.value = value;

            if (isNewOperator) { // 연산자 입력
                if (isLastOperator) changeOperator(state, value);
                else state.history.push(value);
            } else if (value === INITALIZE) { // 초기화
                resetCalculate(state);
            } else if (value === DELETE) { // 삭제
                deleteLastValue(state, lastHistory, isLastOperator);
            } else if (!isLastOperator && lastHistory !== '') { // 피연산자 입력
                appendToNumber(state, value, lastHistory);
            } else { // 첫 피연산자 입력
                state.history.push(value);
            }
        },
    },
});

export const { setValue } = slice.actions;
export default slice.reducer;
