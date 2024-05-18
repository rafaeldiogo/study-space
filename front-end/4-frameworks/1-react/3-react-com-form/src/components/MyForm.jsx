// components
import "./MyForm.css";

// hooks
import { useState } from "react";

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    // evita o page reload ao enviar o form
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    /* 
    Passos que são feitos antes de limpar o form
    - validação
    - envio 
    */

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - criação de form  */}
      <form onSubmit={handleSubmit}>
        {/* Uma maneira de se criar form */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        {/* Outra maneira de se criar form (forma sugerida na documentação do React) */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificando a manipulação de valores */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - input de textarea */}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - input select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
