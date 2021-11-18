import React from 'react';
import ReactDOM from 'react-dom';
import 'views/App.css';
import App from 'views/App';

console.log('hello');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
