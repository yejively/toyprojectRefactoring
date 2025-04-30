import { createSlice } from '@reduxjs/toolkit';
import { TestApi } from '@/entities/Main';
import { handelType } from '@/features';

const initialState = {
    buttons: [],
    history: '',
    display: '',
    result: '',
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
            .addCase(TestApi.pending, () => {
                console.log("pending");
            })
            .addCase(TestApi.fulfilled, (state, action) => {
                state.buttons = action.payload;
            })
            .addCase(TestApi.rejected, action => {
                console.log('getVoyNoList rejected e: ', action.error);
            })
            .addDefaultCase(state => state),
});

export default mainSlice;
