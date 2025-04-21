import { createAsyncThunk } from '@reduxjs/toolkit';

function timer() {
    // setTimeout 시간 지연 함수를 promise 형태로 반환해줘야함
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

export const TestApi = createAsyncThunk('Test', async (data, { rejectWithValue }) => {
    // data: 파라미터로 넘겨준 객체 {value, type}
    // { rejectWithValue }: thunkApi 객체의 property
    try {
        await timer();
        if (data === null || data === undefined) throw new Error("Error");
        else return data;
        // 내부적으로 Promise.resolve(data)로 감싸져서 반환
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// createAsyncThunk 콜백 함수의 두번째 인자 - thunkApi 객체
// property dispatch - 함수 내부에서 다른 액션 실행 가능
// property getState - 현재 상태 조회
// property rejectWidthValue - rejected 액션에 커스텀 payload 추가

// Error 객체는 모든 에러의 프로토타입
// 모든 에러 객체에 message, name 프로퍼티 존재
// new Error("Error") -> name: Error, message: Error
