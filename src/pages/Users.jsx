import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(saved);
  }, []);

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <UserList users={users} />
    </div>
  );
};

export default Users;
