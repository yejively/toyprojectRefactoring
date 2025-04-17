import { createAsyncThunk } from '@reduxjs/toolkit';

function timer() {
    // setTimeout 지연 함수를 promise 형태로 반환해줘야함
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

export const TestApi = createAsyncThunk('Test', async (data, { rejectWithValue }) => {
    try {
        await timer();
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// createAsyncThunk 콜백 함수의 두번째 인자 - thunkApi 객체
// .dispatch - 함수 내부에서 다른 액션 실행 가능
// .getState - 현재 상태 조회
// .rejectWidthValue - rejected 액션에 커스텀 payload 추가
