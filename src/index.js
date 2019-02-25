import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import manageCharity from './reducers/manageCharity',
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(manageCharity, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        {' '}
        <App />
    </Provider>, 
    document.getElementById('root')); //does this need to change to container?

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
