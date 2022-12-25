import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://github.githubassets.com/images/modules/dashboard/onboarding/gh-desktop.png',
};

const App = () => (
  <Comment author={userInfo} text="Good job!" date={new Date('2019-01-01T11:32:19.566Z')} />
);
export default App;
