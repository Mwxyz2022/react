import React from 'react';
import UserList from './UserList';

const users = [
  {
    name: 'Tom',
    age: 24,
    id: '001',
  },
  {
    name: 'Anastasia',
    age: 12,
    id: '002',
  },
  {
    name: 'Victor',
    age: 42,
    id: '003',
  },
  {
    name: 'Natalia',
    age: 33,
    id: '004',
  },
  {
    name: 'Vladyslav',
    age: 54,
    id: '005',
  },
  {
    name: 'Stanislav',
    age: 23,
    id: '006',
  },
  {
    name: 'Svyatoslav',
    age: 56,
    id: '007',
  },
  {
    name: 'Rostyslav',
    age: 44,
    id: '008',
  },
  {
    name: 'Konstantyn',
    age: 21,
    id: '009',
  },
  {
    name: 'Lesya',
    age: 28,
    id: '010',
  },
];

const App = () => <UserList users={users} />;

export default App;
