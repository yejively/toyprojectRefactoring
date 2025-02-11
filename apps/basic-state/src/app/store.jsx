import { configureStore } from '@reduxjs/toolkit';
import slice from '@/pages/Main/ui/Pages/slice';

// 스토어 생성
const store = configureStore({
    reducer: {
        input: slice, // key값 - slice의 name, value값 - 해당 리듀서에 맞게 임의 작성.
    },
});

export default store;
