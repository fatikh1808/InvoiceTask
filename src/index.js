import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store";
import {Provider} from 'react-redux';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
