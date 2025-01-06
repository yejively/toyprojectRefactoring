import { createAsyncThunk } from '@reduxjs/toolkit';

function timer() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

export const TestApi = createAsyncThunk('Test', async (data, { rejectWithValue }) => {
    try {
        const response = await timer();
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
