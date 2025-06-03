import React from 'react';
import Register from './pages/Register';
import Users from './pages/Users';
import { Container, Tabs, Tab } from '@mui/material';

function App() {
  const [tab, setTab] = React.useState(0);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Tabs value={tab} onChange={(e, v) => setTab(v)} centered>
        <Tab label="Cadastrar" />
        <Tab label="Usuários" />
      </Tabs>
      {tab === 0 && <Register />}
      {tab === 1 && <Users />}
    </Container>
  );
}

export default App;
