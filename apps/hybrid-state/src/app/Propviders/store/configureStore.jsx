import { createStoreConfig } from '@shared/redux-utils';
import rootReducer from './reducers';

export const wrapper = createStoreConfig(rootReducer);
