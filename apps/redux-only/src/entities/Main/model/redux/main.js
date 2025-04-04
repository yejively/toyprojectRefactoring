import { createSlice } from '@reduxjs/toolkit';
import { TestApi } from '@/entities/Main';

export const initialState = {
    history: '',
    display: '',
    result: '',
    operator: { value: '', type: null },
    init: false,
    del: false,
    equal: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        mainStoreReset: () => initialState,
        updateNumber: (state, action) => {
            state.display = action.payload;
            state.history += action.payload;
        },
        updateOperator: (state, action) => {
            const { value, type } = action.payload;
            state.operator = value;

            if (type === 'replace') {
                state.history = state.history.slice(0, -1) + value;
            } else {
                state.history += value;
            }
        },
        updateHistory: state => {
            state.display = '';
            state.history = state.history.slice(0, -1);
        },
        updateResult: (state, action) => {
            state.result = action.payload;
            state.history = `${state.history}=`;
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
