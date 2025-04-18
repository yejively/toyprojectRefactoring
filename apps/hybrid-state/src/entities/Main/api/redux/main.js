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
        if (data === null || data === undefined) throw new Error("Error");
        else return data;
        // 내부적으로 Promise.resolve(data)로 감싸져서 반환
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// createAsyncThunk 콜백 함수의 두번째 인자 - thunkApi 객체
// .dispatch - 함수 내부에서 다른 액션 실행 가능
// .getState - 현재 상태 조회
// .rejectWidthValue - rejected 액션에 커스텀 payload 추가

// Error 객체는 모든 에러의 프로토타입
// 모든 에러 객체에 message, name 프로퍼티 존재
// new Error("Error") -> name: Error, message: Error

// async, await
// async 키워드는 await를 사용하기 위한 선언문 정도로 이해하면 됨
// function 앞에 async 키워드를 붙여줌으로써, 함수 내에서 await 키워드를 사용할 수 있게 한다.
// async 키워드가 붙은 function은 Promise 객체로 값을 return한다.
