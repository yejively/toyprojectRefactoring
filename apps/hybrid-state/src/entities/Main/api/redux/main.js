import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const TestApi = createAsyncThunk('Test', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('/data/buttons.json');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
