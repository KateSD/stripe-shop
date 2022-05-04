import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./redux/StateProvider";
import reducer, {initialState} from "./redux/reducer";

ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
    <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
