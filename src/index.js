import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';
import Notifications from 'react-notify-toast';
require('dotenv').config();

const app = (
    <Provider store={store}>
        <App />
        <Notifications />
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
