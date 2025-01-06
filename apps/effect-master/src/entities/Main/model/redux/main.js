import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isTest: false,
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
    extraReducers: builder => builder.addDefaultCase(state => state),
});

export default mainSlice;
