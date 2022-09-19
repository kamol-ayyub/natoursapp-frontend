import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppRouter } from './app/router';
import { UserIsLoggedContext } from './context/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const [logged, setLogged] = useState(false);

root.render(
  <React.StrictMode>
    {/* <UserIsLoggedContext.Provider value={{ logged, setLogged }}> */}
    <AppRouter />
    {/* </UserIsLoggedContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
