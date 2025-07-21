import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getYearList = createAsyncThunk('yearList', async (_, { rejectWithValue }) => {
    try {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1500);
        });

        const res = await axios.get('/data/yearList.json');
        return res.data;
    } catch (error) {
        return rejectWithValue('Error code: getYearList error');
    }
});

export const getContentData = createAsyncThunk('contentData', async (year, { rejectWithValue }) => {
    try {
        const [summaryData, mainTableData] = await Promise.all([
            axios.get('/data/yearsSummaryData.json'),
            axios.get(`/data/mainTableData_${year}.json`),
        ]);

        return {
            summaryData: summaryData.data,
            mainTableData: mainTableData.data,
        };
    } catch (error) {
        return rejectWithValue('Error code: getContentData error');
    }
});
