import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

createRoot(document.getElementById('root')).render( // root 아이디 요소를 react 애플리케이션의 루트로 설정
    <Provider store={store}>
        <App />
    </Provider>,
);

// main.jsx: react 애플리케이션의 진입점 (entry point)
// Provider: redux store를 react 컴포넌트에 전달하는 역할을 함.
// store: store.jsx에서 configureStore로 만든 스토어를 전달
