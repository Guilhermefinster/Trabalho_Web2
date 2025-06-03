import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";

const Register = ({ onRegister }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birth: "",
    phone: "",
    cpf: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(user);
    setUser({ name: "", email: "", birth: "", phone: "", cpf: "" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Stack spacing={2}>
        <TextField label="Nome" name="name" value={user.name} onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" type="email" value={user.email} onChange={handleChange} fullWidth />
        <TextField label="Data de Nascimento" name="birth" type="date" InputLabelProps={{ shrink: true }} value={user.birth} onChange={handleChange} fullWidth />
        <TextField label="Telefone" name="phone" value={user.phone} onChange={handleChange} fullWidth />
        <TextField label="CPF" name="cpf" value={user.cpf} onChange={handleChange} fullWidth />
        <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
      </Stack>
    </Box>
  );
};

export default Register;
