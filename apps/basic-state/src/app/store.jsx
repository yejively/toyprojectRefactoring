import { configureStore } from '@reduxjs/toolkit';
import exSlice from '@/pages/Main/ui/Pages/slice';

// 스토어 생성
const store = configureStore({
    reducer: {
        changeStr: exSlice, // key값 - slice의 name, value값 - 해당 리듀서에 맞게 임의 작성.
    },
});

export default store;
