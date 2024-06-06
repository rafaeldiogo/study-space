/* 4 - importação de componentes */
import FirstComponent from "./components/FirstComponent";

/* 5 - desestruturando props */
import SecondComponent from "./components/SecondComponent";
import DestructuringProps, { Category } from "./components/DestructuringProps";

/* 6 - import HookUseState */
import HookUseState from "./components/HookUseState";

/* 9 - context */
import { createContext, useMemo } from "react";

/* 10 - utilizando contexto */
import Context from "./components/Context";

// React com TS
/* 
- Adicionar Typescript ao React nos dá mais possibilidades;
- Seguindo a mesma linha de quem em JS, temos uma forma mais padronizada para programar;
- Como tipos para componentes ou mapeamento de props por meio de interface;
- Isso dá mais confiabilidade ao projeto e está sendo cada vez mais utilizado hoje em dia.
*/

// Instalando React com TS
/* 
- Para instalar o TS junto do React é simples;
- Vamos começar com create-react-app e adicionar a flag --template com o valor de typescript;
- Um novo projeto é criado, agora com arquivos .tsx;
- Podemos inicializá-lo normamelmente.
*/

// Estrutura do React com TS
/* 
- A estrutura de React quando adicionamos TS não muda muito;
- Temos as pastas clássicas como: node_modules, src e public;
- Em src que as coisas ficam diferentes, temos a criação de arquivos .tsx;
- Que são arquivos jsx, porém com a possibilidade de aplicação das funcionalidades de TS;
- Podemos executar o projeto com npm run start.
*/

// Criação de variáveis em componentes
/* 
- Podemos criar variáveis dentro dos componentes;
- E elas podem receber os tipos que já vimos até este momento do curso;
- Isso nos permite trabalhar com JSX com apoio destas variáveis e seus tipos.
*/

// Criação de funções em componentes
/* 
- Podemos também criar funções em componentes;
- Estas funções recebem parâmetros que podem ser tipados;
- E o seu retorno também;
- Ou seja, podemos aplicar os mesmos conceitos que já vimos de TS.
*/

// Extensão para React com TS
/* 
- A extensão que vamos utilizar é a TypeScript React code snippets;
- Ela nos ajuda com atalhos para programar mais rápido;
- Como o tsrafce, que cria um componente funcional;
- Isso torna o nosso dia a dia mais simples.
*/

// Importando componentes
/* 
- A importação de componente funciona da mesma forma que sem o typescript;
- Porém temos que nos atentar aos valores e tipos das props de cada componente;
- O TS interage de forma mais sucinta na parte da importação.
*/

// Destructuring nas props
/* 
- O destructuring é um recurso de ES6 que permite separar um array ou objeto em várias variáveis;
- Aplicamos esta técnica nas props para não precisar repetir o nome do objeto sempre;
- Podemos fazer desta maneira em TS também.
*/

// O hook useState
/* 
- O useState é um hook muito utilizado em React;
- Serve para consultar e alterar o estado de algum dado;
- Atrelamos uma função set a um evento como mudança de dado em input e alteramos o valor da variável base;
- Podemos adaptar este recurso para TS também.
*/

// Enum
/* 
- O Enum é uma forma interessante de formatar um objeto com chaves e valores;
- Onde podemos utilizar como props;
- Passando a chave pela prop, imprimimos o valor dela no componente.
*/

// Types
/* 
- Além das interfaces, podemos criar estruturas de tipos com o type;
- Isso nos permite criar dados com tipos de dados fixos;
- Ou até tipos customizados, como quando utilizamos o operador | .
*/

// Context API
/* 
- A Context API é uma forma de transmitir dados entre componentes no React;
- A ideia principal é que podemos determinar quais componentes recebem estes dados;
- Ou seja, fazem parte do contexto;
- Podemos aplicar TS a esta funcionalidade também.
*/

// Utilizando o dado de contexto
/* 
- Para utilizar os dados do contexto vamos precisar de um hook;
- Que é o useContext;
- A partir dele conseguimos extrair dados e utilizar em um componente.
*/

/* 8 - type */
type textOrNum = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

/* 9 - interface */
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  /* 1 - variáveis */
  const name: string = "Rafael";
  const age: number = 30;
  const isWorking: boolean = true;

  /* 2 - funções */
  // tipou o parâmetro name como string (name: string) e o retorno dele como string tambem ((): string)
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  /* 8 - type */
  const myText: textOrNum = "Tem algum texto aqui";
  let mySecondText: textOrNum = null;

  mySecondText = "opa";
  const testandoFixed: fixed = "Aquilo";

  /* 9 - context */
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>React com TypeScript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <DestructuringProps
          title="Primeiro Post"
          content="Algum conteúdo"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <DestructuringProps
          title="Segundo Post"
          content="Mais outro conteúdo"
          commentQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <HookUseState />
        {myText && <p>Tem texto na variável myText</p>}
        {mySecondText && <p>Tem texto na variável mySecondText</p>}
        {testandoFixed && <p>Tem texto</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
