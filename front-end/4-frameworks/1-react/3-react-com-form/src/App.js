// style/css
import "./App.css";

// components
import MyForm from "./components/MyForm";

// Formulários
/* 
- No React vamos também utilizar a tag form para formulários;
- As labels dos inputs contém o atributo htmlFor que deve ter o valor do
name do input;
- Não utilizamos action, pois o processamento será fetio de forma assíncrona.
*/

// Label envolvendo o input
/* 
- Em React um padrão comum é a tag label envolvendo o input;
- Isso faz com que o atributo for se torne opcional;
- Simplificando nossa estrutura de HTML, sem perder a semântica.
*/

// Manipulação de valores
/*
- Para manipular os valores dos inputs vamos utilizar o hook useState;
- Ou seja, podemos armazenar na variável e utilizar o set para alterar o valor;
- Vamos criar uma função para alterar o valor no evento onChange;
- Deixando nosso código fácil de trabalhar nas próximas etapas: como evido de
dados para o Banco de Dados e validação.
- Mais utilizado quando precisa utilizar bloco
*/

// Simplificando a manipulação de valores
/* 
- Quando temos vários inputs podemos realizar a manipulação de forma simples;
- Basicamente criamos uma função inline no onChange;
- Ela vai alterar o valor do state com o método set, da mesma forma que 
a função isolada.
- Mais utilizado quando só quer os valores
*/

// Controlled inputs
/* 
- Controlled inputs é um recurso que nos permite mais flexibilidade nos forms de React;
- Precisamos apenas iagualar o valor ao state;
- Um uso muito comum: formulários de edição que os dados vem do back-end, conseguiremos
preencher o input mais facilmente.
*/

// Limpando formulários
/* 
- Com o controller inputs, limpar o form será fácil;
- Basta atribuir um valor de uma string vazia aos states e pronto!
- Isso será feito após o envio em formulários que o usuário precisa preencher novamente;
*/

// Input de Textarea
/* 
- O textarea pode ser considerado um input de texto normal;
- Utilizaremos o value para alterar o state incial;
- E o evento onChange para modificar o valor do state.
*/

// Input de Select
/* 
- O select também será muito sememlhante aos outros inputs;
- Quando temos a alteração de um valor o evento onChange pode captar isso;
- O value também pode retribuir qual option estará selecionado.
*/

function App() {
  return (
    <div className="App">
      <h1>Formulários com React</h1>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "Sou um dev",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
