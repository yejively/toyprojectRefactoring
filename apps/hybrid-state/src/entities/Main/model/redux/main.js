import { createSlice } from '@reduxjs/toolkit';
import { TestApi } from '@/entities/Main';
import { handelType } from '@/features';

const initialState = {
    history: '',
    display: '',
    result: '',
    operator: { value: '', type: null },
    init: false,
    del: false,
    equal: false,
    test: '',
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        buttonAction: (state, action) => {
            handelType(state, action.payload);
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
