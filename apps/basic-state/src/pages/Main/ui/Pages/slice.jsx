import { createSlice } from '@reduxjs/toolkit';
// createSlice는 내부적으로 immer 라이브러리를 사용한다. -> 기존 객체를 직접적으로 수정해도 불변성 유지로 이전 상태를 변경하지않고 새로운 상태를 생성.
const initialState = {
    str: '',
};

const exSlice = createSlice({
    name: 'changeStr', // slice 식별 이름
    initialState,
    reducers: {
        one: state => {
            state.str = '1'; // 상태를 직접적으로 변경해도 새로운 객체가 생성됨.
        },
    },
});

// const tokenSlice = createSlice({
//     name: 'token',
//     initialState: { tokenList: {}, tokenSet: {} },
//     reducers: {
//         setTokenList: (state, action) => {
//             state.tokenList = action.payload;
//         },
//         setTokenDataset: (state, action) => {
//             state.tokenSet = action.payload;
//         },
//     },
// });

export const { one } = exSlice.actions;
export default exSlice.reducer;
