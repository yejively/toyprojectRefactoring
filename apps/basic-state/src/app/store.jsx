import { configureStore } from '@reduxjs/toolkit';
import slice from '@/pages/Main/ui/Pages/slice';

const store = configureStore({ // store 설정 (상태관리 중앙 저장소)
    reducer: {
        input: slice,
    },
});

export default store;
