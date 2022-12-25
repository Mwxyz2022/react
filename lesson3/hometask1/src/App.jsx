import React from 'react';
import Greeting from './Greeting';

const App = () => <Greeting firstName="John" lastName="Doe" birthDate={new Date('20 Dec 2000')} />;

export default App;
