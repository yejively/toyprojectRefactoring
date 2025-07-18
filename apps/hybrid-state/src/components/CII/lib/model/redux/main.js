import { createSlice } from '@reduxjs/toolkit';
import processYearData from '@/components/CII/Header/lib/processYearData';
import { getYearList, getContentData } from '@/components/CII/lib';

export const initialState = {
    loading: false,
    error: { type: false, message: null },
    currentYear: null,
    summaryData: null,
    mainTableData: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        dataChange: (state, action) => {
            state.isTest = action.payload;
        },
        changeYear: (state, action) => {
            const type = action.payload;

            if (type === 'prev') state.currentYear = state.currentYear - 1;
            else state.currentYear = state.currentYear + 1;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getYearList.pending, () => {})
            .addCase(getYearList.fulfilled, (state, action) => {
                state.currentYear = processYearData(action.payload);
            })
            .addCase(getYearList.rejected, (state, action) => {
                state.error.type = true;
                state.error.message = action.payload;
            })
            .addCase(getContentData.pending, () => {})
            .addCase(getContentData.fulfilled, (state, action) => {
                const { summaryData, mainTableData } = action.payload;
                state.summaryData = summaryData;
                state.mainTableData = mainTableData;
            })
            .addCase(getContentData.rejected, (state, action) => {
                state.error.type = true;
                state.error.message = action.payload;
            }),
});

export default mainSlice;
