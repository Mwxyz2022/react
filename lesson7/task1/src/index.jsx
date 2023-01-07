import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(<App numbers={numbers} />, rootElement);
