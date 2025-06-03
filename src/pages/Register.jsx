import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';

const Register = () => {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

  const addUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <UserForm onAddUser={addUser} />
    </div>
  );
};

export default Register;
