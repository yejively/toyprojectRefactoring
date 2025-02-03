import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
// react-dom/cliend : react 애플리케이션을 dom에 마운트하는데 사용.
import App from './App';

// createRoot 함수를 이용해 HTML 파일의 <div id="root"></div>를 React 애플리케이션의 루트 컨테이너로 지정합니다.
// App 컴포넌트를 해당 컨테이너에 마운트합니다.
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
