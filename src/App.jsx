import React, { useState, useEffect } from "react";
import { Container, Tabs, Tab } from "@mui/material";
import Register from "./pages/Register";
import Users from "./pages/Users";

const App = () => {
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const handleRegister = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Tabs value={tab} onChange={(e, newTab) => setTab(newTab)} centered>
        <Tab label="Cadastro" />
        <Tab label="Usuários" />
      </Tabs>
      {tab === 0 && <Register onRegister={handleRegister} />}
      {tab === 1 && <Users users={users} />}
    </Container>
  );
};

export default App;
