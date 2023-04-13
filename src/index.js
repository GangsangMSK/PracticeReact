import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './03/Library';
import Clock from './04/Clock';
import CommentList from './05/CommentLsit';
import NotificationList from './06/NotificationList';
import Counter from './07/Counter';
import Acomodate from './07/Acomodate';
import ConfirmButton from './08/ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    /* <CommentList /> */
    // <NotificationList />
    // <Acomodate />
    <ConfirmButton />
  /* </React.StrictMode> */
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
