import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer);
ReactDOM.render(
	  <Provider store={store}>
	<App />
	  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
