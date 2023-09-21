import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CacheBuster from 'react-cache-buster';
import packageJson from '../package.json';

declare global {
  var appVersion: string;
}

global.appVersion = packageJson.version;
console.log(appVersion);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

   <CacheBuster
      currentVersion={appVersion}
      isEnabled={true}
      isVerboseMode={true}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </CacheBuster>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
