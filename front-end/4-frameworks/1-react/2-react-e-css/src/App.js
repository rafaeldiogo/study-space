// components
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

// hooks
import { useState } from "react";

// style/CSS
import "./App.css";

// CSS Global
/* 
- O CSS global é utilizado para estilizar diversos elementos em comum ou
fazer um reset no CSS;
- Utilizamos o arquivo index.css para isso;
- Ele está na pasta src.
*/

// CSS de componente
/* 
- O CSS de componente é utilizado para um componente em específico;
- Geralmente é criado um arquivo com o mesmo nome do componente e este
é importado no componente;
- Note que este método não scoped, ou seja, o CSS vaza para outros
componentes se houver uma regra em colisão;
- O React já cria um exemplo desta técnica com o App.cc/js. 
*/

// Inline style
/* 
- O inline style do React é igual o do CSS;
- Por meio do atributo style conseguimos aplicar regras diretamente em um elemento;
- Devemos optar por outras maneiras de CSS, o inline pode dificultar a
manutenção ou deixar o código imprevisível em alguma situações.
*/

// Inline style Dinâmico
/* 
- O CSS dinâmico inline aplica estilo baseado em uma condicional;
- Vamos inserir no atributo um if ternário;
- Dependendo da condição podemos mudar que regras de estilo um elemento recebe. 
*/

// Classes dinâmicas no CSS
/* 
- Podemos também aplicar lógica para mudar a classe de CSS de um elemento;
- Também utilizaremos o if ternário;
- Essa abordagem é mais interessante que o cSS inline;
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de 
organização de código;
*/

// CSS Modules
/* 
- O CSS Modules é um recurso de CSS scoped;
- Ou seja, ele vai ser exclusivo do componente;
- O nome do arquivo é: Componente.module.css;
- Precisamos importa-lo no componente;
- É o mais indicado a ser utilizado.
*/

function App() {
  const n = 15;
  const [name] = useState("Rafael");

  const redTitle = true;

  return (
    <div>
      {/* CSS Global */}
      <h1 className="title-page">React com CSS</h1>
      {/* CSS do componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Rafael" ? { color: "red" } : null}>Teste nome</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;
