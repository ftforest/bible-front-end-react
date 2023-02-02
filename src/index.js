import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import Router from './router/router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals(console.log, {reportAllChanges: true});
reportWebVitals(logDelta);
//reportWebVitals(sendToAnalytics);


function logDelta({name, id, delta}) {
    console.log(`${name} matching ID ${id} changed by ${delta}`);
}
/*function sendToAnalytics(metric) {
    // Replace with whatever serialization method you prefer.
    // Note: JSON.stringify will likely include more data than you need.
    const body = JSON.stringify(metric);

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}*/
