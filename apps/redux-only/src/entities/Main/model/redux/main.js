import { createSlice } from '@reduxjs/toolkit';
import { TestApi } from '@/entities/Main';
import { handleOperatorPrecedence } from '@/features';

const OPERATOR = ['÷', '×', '-', '+'];

const initialState = {
    history: '',
    display: '',
    result: '',
    operator: { value: '', type: null },
    init: false,
    del: false,
    equal: false,
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
        updateNumber(previousResult);
        state.history += value;
    } else {
        // 연산자 입력 처리
        state.history += value;
    }
};

const handelDelete = (state) => {
    if (!state.history || state.result) return;

    state.display = '';
    state.history = state.history.slice(0, -1);
};

const updateResult = (state) => {
    if (!state.history || OPERATOR.includes(state.history.slice(-1))) return;

    const numArr = state.history.split(/[+\-×÷]/);
    const operArr = state.history.split(/\d+/).filter(Boolean);

    handleOperatorPrecedence(numArr, operArr, ['×', '÷']);
    handleOperatorPrecedence(numArr, operArr, ['+', '-']);

    state.result = `${numArr[0]}`;
    state.history = `${state.history}=`;
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        mainStoreReset: () => initialState,
        buttonAction: (state, action) => {
            const { value, type } = action.payload;

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
                case 'init':
                    return initialState;
                default:
                    console.log("default");
                    break;
            }
        },
    },
    extraReducers: builder =>
        builder
            .addCase(TestApi.pending, state => {
                state.isSetTest = '대기중';
            })
            .addCase(TestApi.fulfilled, state => {
                state.isSetTest = '성공';
            })
            .addCase(TestApi.rejected, action => {
                console.log('getVoyNoList rejected e: ', action.error);
            })
            .addDefaultCase(state => state),
});

export default mainSlice;
