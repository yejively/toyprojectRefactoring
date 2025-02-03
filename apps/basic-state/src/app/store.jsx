import { configureStore } from '@reduxjs/toolkit';
import exSlice from '@/pages/Main/ui/Pages/slice';

// 스토어 생성
const store = configureStore({
    reducer: {
        changeStr: exSlice, // 여러 슬라이스를 추가할 수도 있음
    },
});

export default store;
