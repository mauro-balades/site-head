import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as serviceWorker from './serviceWorker';

const main = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root'),
        () => {
            AOS.init();
        }
    );
};

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', main, false);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
