import { combineReducers } from 'redux';
import { mainSlice } from '@/components/CII/lib';

const rootReducer = (state, action) => {
    const combinedReducer = combineReducers({
        main: mainSlice.reducer,
    });
    return combinedReducer(state, action);
};

export default rootReducer;
