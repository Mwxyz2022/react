import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://github.githubassets.com/images/modules/dashboard/onboarding/gh-desktop.png',
};

const App = () => {
  const author = { text: 'Good job!', date: new Date('2019-01-01T11:32:19.566Z') };
  return <Comment user={userInfo} author={author} />;
};
export default App;
