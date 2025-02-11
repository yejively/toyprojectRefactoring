import { createSlice } from '@reduxjs/toolkit';
// createSlice는 내부적으로 immer 라이브러리를 사용한다. -> 기존 객체를 직접적으로 수정해도 불변성 유지로 이전 상태를 변경하지않고 새로운 상태를 생성.

const slice = createSlice({
    name: 'input',
    initialState: { value: '', history: [] },
    reducers: {
        setValue: (state, action) => {
            const value = action.payload;
            const lastHistory = state.history.at(-1) || '';
            const isLastOperator = ['÷', '×', '+', '-'].includes(lastHistory);
            const isNewOperator = ['÷', '×', '+', '-'].includes(value);

            if (state.history.length === 0 && isNewOperator) return;

            state.value = value;

            if (isNewOperator) {
                if (isLastOperator) {
                    state.history[state.history.length - 1] = value;
                } else {
                    state.history.push(value);
                }
            } else if (state.history.length > 0 && !isLastOperator) {
                state.history[state.history.length - 1] = lastHistory + value;
            } else {
                state.history.push(value);
            }
        },
    },
});

export const { setValue } = slice.actions;
export default slice.reducer;
