import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserForm = ({ onAddUser }) => {
  const [user, setUser] = useState({ nome: '', email: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (user.nome && user.email) {
      onAddUser(user);
      setUser({ nome: '', email: '' });
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField label="Nome" name="nome" value={user.nome} onChange={handleChange} />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
    </Box>
  );
};

export default UserForm;
