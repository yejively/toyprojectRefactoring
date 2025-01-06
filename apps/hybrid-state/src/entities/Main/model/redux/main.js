import { createSlice } from '@reduxjs/toolkit';
import { TestApi } from '@/entities/Main';

export const initialState = {
    isTest: false,
    isSetTest: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        mainStoreReset: () => initialState,
        dataChange: (state, action) => {
            state.isTest = action.payload;
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
