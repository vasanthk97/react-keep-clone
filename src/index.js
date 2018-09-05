import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'
import {init} from './config/firebaseConfig'
import thunk from 'redux-thunk'
import {store} from './store' 
init()
let middlewares = [thunk]
// const store = createStore(reducer ,applyMiddleware(...middlewares));
ReactDOM.render(
	  <Provider store={store}>
	<App />
	  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
