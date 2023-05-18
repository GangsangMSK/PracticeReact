import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './03/Library';
import Clock from './04/Clock';
import CommentList from './05/CommentLsit';
import NotificationList from './06/NotificationList';
import Counter from './07/Counter';
import Acomodate from './07/Acomodate';
import ConfirmButton from './08/ConfirmButton';
import LoginControl from './09/LoginControl';
import LandingPage from './09/LandingPage';
import NameForm from './11/NameForm';
import FruitSelect from './11/FruitSelect';
import Reservation from './11/Reservation';
import SignUp from './11/SingUp';
import Calculator from './12/Calculator';
import WelcomeDialog from './13/WelcomeDialog';
import SignUpDialog from './13/SignUpDialog';
import ProfileCard from './13/ProfileCard';
import App from './14/App';
import DarkOrLight from './14/DarkOrLight';
import MainPage from './15/MainPage';
import Blocks from './15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    /* <CommentList /> */
    // <NotificationList />
    // <Acomodate />
    // <ConfirmButton />
  /* </React.StrictMode> */
  // <LandingPage />
  // <NameForm/>
  // <FruitSelect/>
  // <Reservation/>
  // <SignUp/>
  // <Calculator/>
  // <WelcomeDialog/>
  // <SignUpDialog/>
  // <ProfileCard/>
  // <App/>
  // <DarkOrLight/>
  // <MainPage/>
  <Blocks/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
