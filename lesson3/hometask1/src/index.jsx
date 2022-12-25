import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate={new Date('20 Dec 2000')} />,
  rootElement,
);
