import React, { useState } from 'react';
import api from './api.js';

function App() {

  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(null);
  const [id, setId] = useState(null);

  const buscarUmaPessoa = async () => {
    const response = await api.get(`/pessoa/${6}`);
    console.log(response);
  };

  const buscarTodasPessoas = async () => {
    const response = await api.get("/pessoas");
    console.log(response);
  };

  const inserirUmaPessoa = async () => {
    const response = await api.post("/pessoa", { nome: nome, idade: idade });
    console.log(response);
  };

  const alterarUmaPessoa = async () => {
    const response = await api.put("/pessoa", { id: id, nome: nome, idade: idade });
    console.log(response);
  };

  const deletarUmaPessoa = async () => {
    const response = await api.delete(`/pessoa/${id}`);
    console.log(response);
  };

  return (
    <div>
      <button onClick={buscarUmaPessoa}>Buscar Uma pessoa</button><br />
      <button onClick={buscarTodasPessoas}>Buscar Todas as Pessoas</button><br />
      Nome: <input onChange={e => setNome(e.target.value)} />
      Idade: <input onChange={e => setIdade(e.target.value)} />
      <button onClick={inserirUmaPessoa}>Inserir</button><br />
      Id: <input onChange={e => setId(e.target.value)} />
      Nome: <input onChange={e => setNome(e.target.value)} />
      Idade: <input onChange={e => setIdade(e.target.value)} />
      <button onClick={alterarUmaPessoa}>alterar</button><br />
      Id: <input onChange={e => setId(e.target.value)} />
      <button onClick={deletarUmaPessoa}>deletar</button><br />
    </div>
  );
};

export default App;
