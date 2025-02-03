import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    str: '',
};

const exSlice = createSlice({
    name: 'changeStr',
    initialState,
    reducers: {
        one: state => {
            state.str = '1';
        },
    },
});

export const { one } = exSlice.actions;
export default exSlice.reducer;
