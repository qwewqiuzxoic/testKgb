import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(ReduxThunk,logger))
); // 스토어를 만듭니다.
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
  
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
