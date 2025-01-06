import { createRoot } from 'react-dom/client';
import { ReduxProviderContainer } from './Propviders';
import App from './App';

createRoot(document.getElementById('root')).render(
    <ReduxProviderContainer>
        <App />
    </ReduxProviderContainer>,
);
