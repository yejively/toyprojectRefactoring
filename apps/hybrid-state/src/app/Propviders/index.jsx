import { ReduxProvider } from '@shared/redux-utils';
import { wrapper } from './store/configureStore';

export const ReduxProviderContainer = ({ children }) => <ReduxProvider store={wrapper}>{children}</ReduxProvider>;
