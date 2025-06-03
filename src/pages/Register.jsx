import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cpf: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ nome: "", email: "", telefone: "", dataNascimento: "", cpf: "" });
    alert("Usuário cadastrado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={user.nome}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={user.telefone}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dataNascimento"
        value={user.dataNascimento}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={user.cpf}
        onChange={handleChange}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Register;
