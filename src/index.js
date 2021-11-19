import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';

console.log('hello');

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
