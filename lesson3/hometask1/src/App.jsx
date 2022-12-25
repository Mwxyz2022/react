import React from 'react';
import Greeting from './Greeting';

const App = () => {
  const userInfo = {
    lastName: 'Doe',
    firstName: 'John',
    birthDate: new Date('20 Dec 2022'),
  };

  return <Greeting user={userInfo} />;
};

export default App;
