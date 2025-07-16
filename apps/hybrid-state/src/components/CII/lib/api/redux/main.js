import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getYearList = createAsyncThunk('yearList', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('/data/yearList.json');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const getSummaryData = createAsyncThunk('summaryData', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('/data/yearsSummaryData.json');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const getMainTableData = createAsyncThunk('mainTableData', async (year, { rejectWithValue }) => {
    try {
        const res = await axios.get(`/data/mainTableData_${year}.json`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
