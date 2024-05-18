// hooks
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Rafael", "Pedro", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rafael",
      age: 35,
    },
    {
      id: 2,
      name: "João",
      age: 28,
    },
    {
      id: 3,
      name: "Pedro",
      age: 44,
    },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    // utilizando previous state
    setUsers((prevUsers) => {
      console.log(prevUsers);
      // randomNumber === user.id - filtra/exibe o nome do id selecionado e exclui os ids diferentes
      // randomNumber !== user.id - o nome do id selecionado é excluido e os outros ids sao filtrados/exibidos
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
    console.log(randomNumber);
  };

  return (
    <div>
      <ul>
        {/* Não é uma boa prática utilizar index */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random users</button>
    </div>
  );
};

export default ListRender;
