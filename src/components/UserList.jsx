import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const UserList = ({ users }) => (
  <List>
    {users.map((user, index) => (
      <ListItem key={index}>
        <ListItemText primary={user.nome} secondary={user.email} />
      </ListItem>
    ))}
  </List>
);

export default UserList;
