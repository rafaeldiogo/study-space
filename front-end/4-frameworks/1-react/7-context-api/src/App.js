import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Products } from "./pages/Products.jsx";

// O que é Context API
/* 
- Um recurso que facilita o compatilhamento de um estado entre
componentes;
- Ou seja, quando precisamos de dados "globais", provavelmente
precisamos utilizar o Context;
- O Context precisa encapsular os componentes que receberão seus
valores, geralmente colocamos no App.js ou index.js;
- Os contextos geralmente ficam na pasta context.
*/

// Criando o contexto
/* 
- Primeiramente vamos ter que criar o Context;
- O arquivo deve sempre ter a primeira letra maiúscula no nome, e geralmente
termina em Context: SomeContext.js;
- A convenção é deixar na pasta context em src;
- Onde vamos utilizar o valor contexto, o arquivo precisa ser importado.
*/

// Criando o provider
/* 
- O Provider vai delimitar onde o contexto é utilizado;
- Vamos criar uma espécie de componente com a prop children;
- E este Provider deve encapsular os demais componentes em que precisamos
consultar ou alterar o valor;
- Geralmente ele fica em App.js ou em index.js;
- Agora poderemos compartilhar o valor do contexto em todos os componentes.
*/

// Alterando o contexto
/* 
- Para alterar o valor do contexto precisamos criar um componente que utilize a
função da mudança de contexto;
- Esta mudança ocorrerá no Context e poderá ser consumida por todos os componentes
que recebem o contexto;
- E assim finalizamos o ciclo da Context API.
*/

// Refatorando context com hook
/* 
- Podemos criar um hook para utilizar o contexto, isso nos dá algumas vantagens;
- Não precisamos importar o useContext em todos os lugares que vamos usar o
contexto, só o hook;
- Temos um espaço para fazer uma validação do contexto.
*/

// Contexto mais complexo
/* 
- Contextos mais complexos podem ter variações no comportamento;
- Para isso vamos utilizar um hook chamado useReducer;
- Que é como um useState (apenas um estado), mas para controle de dados 
complexos (dois ou mais estados);
- No reducer teremos diferentes ações com um switch;
- E na aplicação vamos consumir o estado do dado que está no reducer. 
*/

// Alterando contexto complexo
/* 
- Para alterar o contexto vamos utilizar uma função chamada dispatch;
- Ela estará no reducer também;
- E deve conter todas as informações necessárias para a alteração do valor
do contexto;
- Ou seja, o switch entra em ação e retorna um novo contexto.
*/
function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
