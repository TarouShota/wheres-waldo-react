import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { List, MyButton, Input, Waldo, FollowCursor } from './App';
import MousePos from './MousePos';
import reportWebVitals from './reportWebVitals';
// import from './App'

/* A ReactDOM function that renders the component to the DOM. */
ReactDOM.render(
  <React.StrictMode>

    <Input />
    {/* <FollowCursor /> */}

    {/* <Waldo /> */}
    {/* <MyButton /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
