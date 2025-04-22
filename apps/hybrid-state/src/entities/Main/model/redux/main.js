import { createSlice } from '@reduxjs/toolkit';
import { delayedFetch } from '@/entities/Main';
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
            .addCase(delayedFetch.pending, () => {
                console.log("pending");
            })
            .addCase(delayedFetch.fulfilled, (state, action) => {
                // delayedFetch는 Promise를 반환하지만, extraReducers안의 action은 Promise가 아닌 Redux 액션 객체
                handelType(state, action.payload);
            })
            .addCase(delayedFetch.rejected, (state, action) => {
                state.result = action.payload;
            })
            .addDefaultCase(state => state),
});

export default mainSlice;
