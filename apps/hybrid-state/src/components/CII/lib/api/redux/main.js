import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainSlice } from "../..";

export const getYearList = createAsyncThunk('yearList', async (_, { rejectWithValue }) => {
    try {
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

/**
 * year, summary, mainTable API 호출을 조합, 흐름 제어
 */
export const initApp = () => async (dispatch, getState) => {
    try {
        dispatch(mainSlice.actions.setLoading(true));

        await dispatch(getYearList());
        const { currentYear } = getState().main;

        if (currentYear) {
            await dispatch(getContentData(currentYear));
        }
    } catch (error) {
        // 각 thunk 내부에서 이미 rejected를 트리거하고 있음. 에러 처리 X
        console.log(error);
    } finally {
        dispatch(mainSlice.actions.setLoading(false));
    }
};
