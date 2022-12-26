import React from 'react';
import Counter from './Counter';

const App = () => (
  <>
    <Counter start={17} interval={500} />
    <Counter start={-50} interval={1000} />
    <Counter start={100} interval={100} />
  </>
);

export default App;
