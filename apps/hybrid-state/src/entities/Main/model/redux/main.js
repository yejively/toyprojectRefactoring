import { createSlice } from '@reduxjs/toolkit';
import { TestApi } from '@/entities/Main';

const initialState = {
    buttons: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
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
