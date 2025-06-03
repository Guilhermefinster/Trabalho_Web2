import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Nome:</strong> {user.nome} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Telefone:</strong> {user.telefone} <br />
            <strong>Data de Nascimento:</strong> {user.dataNascimento} <br />
            <strong>CPF:</strong> {user.cpf}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
