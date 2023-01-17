import React from 'react';
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_LIST = [];

function App() {
  const [usersList, SetUsersList] = useState(DUMMY_LIST);
  return (
    <div style={{ background: '#1f1f1f' }}>
      <AddUser />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
