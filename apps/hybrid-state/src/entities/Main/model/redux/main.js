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
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(TestApi.fulfilled, (state, action) => {
                handelType(state, action.payload);
            })
            .addCase(TestApi.rejected, (state) => {
                state.result = 'error';
            })
            .addDefaultCase(state => state),
});

export default mainSlice;
