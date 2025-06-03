import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

const Users = ({ users }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Usuários Cadastrados</Typography>
      <Stack spacing={2}>
        {users.map((user, index) => (
          <Paper key={index} sx={{ p: 2 }}>
            <Typography><strong>Nome:</strong> {user.name}</Typography>
            <Typography><strong>Email:</strong> {user.email}</Typography>
            <Typography><strong>Data de Nascimento:</strong> {user.birth}</Typography>
            <Typography><strong>Telefone:</strong> {user.phone}</Typography>
            <Typography><strong>CPF:</strong> {user.cpf}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Users;
