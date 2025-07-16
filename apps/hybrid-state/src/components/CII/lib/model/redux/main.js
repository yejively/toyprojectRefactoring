import { createSlice } from '@reduxjs/toolkit';
import processYearData from '@/components/CII/Header/lib/processYearData';
import { getYearList, getSummaryData, getMainTableData } from '@/components/CII/lib';

export const initialState = {
    pageCode: null,
    currentYear: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        mainStoreReset: () => initialState,
        dataChange: (state, action) => {
            state.isTest = action.payload;
        },
        setPageCode: (state, action) => {
            state.pageCode = action.payload;
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
            .addCase(getYearList.rejected, action => {
                console.log('getYearList rejected e: ', action.error);
            })
            .addCase(getSummaryData.pending, () => {})
            .addCase(getSummaryData.fulfilled, () => {})
            .addCase(getSummaryData.rejected, action => {
                console.log('getSummaryData rejected e: ', action.error);
            })
            .addCase(getMainTableData.pending, () => {})
            .addCase(getMainTableData.fulfilled, () => {})
            .addCase(getMainTableData.rejected, action => {
                console.log('getMainTableData rejected e: ', action.error);
            })
            .addDefaultCase(state => state),
});

export default mainSlice;
