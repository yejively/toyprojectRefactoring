import { createSlice } from '@reduxjs/toolkit';
import processYearData from '@/components/CII/Header/lib/processYearData';
import { getYearList, getContentData } from '@/components/CII/lib';
import descendingSort from '../../hooks/descendingSort';

export const initialState = {
    year: {
        loading: false,
        error: { type: false, message: null },
        currentYear: null,
        lastYear: null,
    },
    content: {
        loading: false,
        error: { type: false, message: null },
        summaryData: null,
        mainTableData: null,
    },
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.year.loading = action.payload;
        },
        changeYear: (state, action) => {
            const type = action.payload;

            // prev 부터 고쳐야됨.
            if (type === 'prev') state.year.currentYear = state.year.currentYear - 1;
            else state.year.currentYear = state.year.currentYear + 1;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getYearList.pending, (state) => {
                state.year.loading = true;
            })
            .addCase(getYearList.fulfilled, (state, action) => {
                state.year.loading = false;
                const { firstYear, lastYear } = processYearData(descendingSort(action.payload));
                state.year.currentYear = firstYear;
                state.year.lastYear = lastYear;
            })
            .addCase(getYearList.rejected, (state, action) => {
                state.year.loading = false;
                state.year.error.type = true;
                state.year.error.message = action.payload;
            })
            .addCase(getContentData.pending, (state) => {
                state.content.loading = true;
            })
            .addCase(getContentData.fulfilled, (state, action) => {
                const { summaryData, mainTableData } = action.payload;
                state.content.loading = false;
                state.content.summaryData = summaryData;
                state.content.mainTableData = mainTableData;
            })
            .addCase(getContentData.rejected, (state, action) => {
                state.content.loading = false;
                state.content.error.type = true;
                state.content.error.message = action.payload;
            }),
});

export default mainSlice;
