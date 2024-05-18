// components
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ChangeMessageState from "./components/ChangeMessageState";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import FirstComponent from "./components/FirstComponent";
import Events from "./components/Events";
import Images from "./components/Images";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import MyComponent from "./components/MyComponent";
import ShowUserName from "./components/ShowUserName";
import TemplateExpressions from "./components/TemplateExpressions";

// hooks
import { useState } from "react";

// styles / CSS
import "./App.css";

// Criando componentes
/* 
- Na maioria dos projetos os componentes ficam em uma pasta chamada components
que devemos criar dentro da pasta src;
- Geralmente são nomeados com a camel case: FirstComponent.jsx;
- No arquivo do componente criado criamos uma função (preferencialmente usando arrow function)
que contém o código deste componente (a lógica e o template);
- E também precisamos exportar (export default NomeDoComponente) esta função para reutiliza-lo.   
*/

// Importando componente
/*
- A importação é a maneira que temos de reutilizar o componente;
- Utilizamos a sintaxe: import X from './components/X' onde X é o nome do componente;
- Para colocar o componente importado em outro componente, precisamos
coloca-lo em forma de tag: <FirstComponent />;
- É uma boa prática separar os imports de acordo com o propósito.
Por exemplo: juntar os imports só de style/CSS, juntar os imports
só de hooks, juntar os imports só de componentes. E separá-los.
*/

// JSX
/* 
- JSX é o HTML do React;
- Onde vamos declarar as tags de HTML que serão exibidas no 
navegador;
- Ficam no return do componente;
- Temos algumas diferenças do HTML, por exemplo: class será className;
- Isso se dá pelas intruções semelhantes de JS e HTML, pois o JSX é
JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apenas um elemento pai;
*/

// Comentários no componente
/* 
- Podemos inserir comentários de duas maneiras no componente;
- Na parte da função, onde é executada a lógica, a sintaxe é?
// Algum comentário;
- E também no JSX:  {/* Algum comentário /*(esse asterisco é antes da barra)}
- As chaves nos permitem executar senteças em JavaScript
- Os comentários no JSX são exibidos apenas para desenvolvimento,
diferente do HTML que o usuário pode ver.
*/

// Template Expressions
/* 
- Template Expressions é o recurso que nos permite executar JS no JSX
e também interpolar variáveis;
- Isso será muito útil ao longo dos projetos em React;
- A sisntaxe é: { algumCódigoEmJS };
- Tudo que está entre chaves é processado em JavaScript e nos retorna
um resultado.
*/

// Hierarquia de componentes
/* 
- Os componentes que criamos podem ser reutilizados em vários
componentes;
- E ainda componentespodem formar uma hierarquia, sendo 
importados uns dentro dos outros como fizemos no App.
*/

// Evento de click
/* 
- Os eventos para o front-end são essencias;
- Em várias situações vamos precisar do click, como ao enviar
formulários;
- No React os eventos já estão "prontos", podemos utilizar
onClick para ativar uma função ao clicar em um elemento;
- Esta função é criada na própria função do componente;
- As funções geralmente tem o padrão handleAlgumaCoisa.
*/

// Funções no evento
/* 
- Quando as funções são simples podemos realizar a lógica no 
próprio evento;
- Isso torna nosso código "complicado" por atrelar lógica com HTML;
- Mas em algumas situações é aplicável.
*/

// Funções de renderização
/* 
- Podemos criar funcções que retornam JSX;
- Isso serve para criar situações que dependam de outras condições;
- Ou seja, o JSX a ser renderizado pode variar por alguma
variável, por exemplo.
*/

// Imagens no React (em public)
/* 
- As imagens públicas do nosso projeto podem ficar na pasta public;
- De lá elas podem ser chamadas pelas tags img diretamente pelo
/nomeDaImagem.jpg;
- Pois a pasta public fica linkada com o src das imagens;
- Geralmente utilizado quando a imagem não vai ser alterada
com o passar do tempo. 
*/

// Imagens em asset
/* 
- A pasta public pode ser utilizada para colocar imagens, 
como fizemos na aula passada;
- Mas um padrão bem utilizado para imagens dos projetos é
colocar em uma pasta chamada assets, em src;
- Ou seja, você vai encontrar projetos com as duas abordagens;
- Em assets precisamos importar as imagens, e o src é dinâmico
com o nome de importação;
- Geralmente utilizada quando a imagem vai sofrer alteração 
com o passar do tempo.
*/

// O que são hooks?
/* 
- Recursos do React que tem diversas funções;
- Como: guardar e alterar o estado de algum dado na nossa aplicação
- Todos os hooks começam com use, por exemplo: useState;
- Podemos criar nossos hooks, isso é chamado de custom hook;
- Os hooks precisam ser importados;
- Geralmente são úteis em todas as aplicações.
*/

// useState hook
/* 
- O hook de useState é um dos mais utilizados;
- Utilizamos para gerenciar o estado de algum dado. Variáveis não
funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar
vamos utilizar o setNome, onde nome é o nome do nosso dado.
*/

// Renderização de lista
/* 
- Uma outra ação bem comum é renderizar listas de dados no template;
- Fazemos isso com os dados com o tipo de array;
- Utilizando o método map (método do javascript) para
 nos auxiliar;
- Além dos dados podemos inserir JSX em cada iteração;
- Geralmente para utilizar em array de objetos: [{},{},{}];
- Uma observação é que o map dentro do JSX tem que ser 
em parenteses () e não em chaves {}, ou seja, () => () e não
() => {}
*/

// A propriedade key
/* 
- Iterar listas sem a propriedade key nos gera um warning, podemos
verificar isso no console;
- O React precisa de uma chave única em cada um dos itens iterados;
- Isso serve para ajudá-lo na renderização do componente;
- Geralmente teremos um array de objetos e podemos colocar key 
como alguma chave única, como o id de algum dado;
- Em último caso devemos utilizar o index do método map: por
exemplo: {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}.
*/

// Previous state
/* 
- Previous state é um recurso que nos permite pegar o dado em seu 
valor original dentro de um set de dado;
- Isso é muito utilizado para modificar listas, pois temos o
valor antigo e transformamos em um valor novo;
- O primeiro argumento de um set sempre será o previous state.
*/

// Renderização condicional
/* 
- Renderização condicional é quando imprimimos uma parte do template baseado 
em uma condição;
- Ou seja, utilizando uma checagem com if;
- Isso é interessante em situações como: usuário autenticado/não autenticado.
*/

// Adicionando um else
/* 
- Podemos também realizar um if/else no JSX;
- Aqui devemos utilizar o if ternário;
- Onde temos a sintaxe: condição ? bloco1 : bloco2.
*/

// Props
/* 
- Props é outro recurso fundamenal do React;
- Nos permite passar valores de um componente pai para um 
componente filho;
- Isso será muito útil quando os dados forem caregados via 
banco de dados, por exemplo;
- As props vem em um objeto no argumento da função do componente;
- Não é uma boa prática utilizar assim. (porps.AlgumaCoisa) 
*/

// Desestruturando props
/* 
- É super comum passar mas de uma porp em um componente;
- Para facilitar isso o React nos permite desestrurar as propriedades
que chegam, com o recurso destructuring;
- Se temos duas props: name e age;
- Podemos fazer assim function MyComponent({name,age});
- Agora não precisamos mais utilizar props.AlgumaCoisa.
*/

// Reutilização de componentes
/* 
- Com props a reutilização de componentes começa a fazer muito sentido;
- Se temos os dados de 1000 carros por exemplo, podemos reaproveitar
o nosso CarDetails 1000 vezes;
- Isso torna nosso código mais padronizado, facilitando a manutenção.
*/

// Reutilização de componente com loop
/* 
- Os arrays de dados podem ter muitos itens também;
- Então o correto é utilizar uma estrutura de loop (map) para
a sua exibição;
- E com isso conseguimos conciliar os três conceitos: renderização
de listas, reaproveitamento de componentes e props.
*/

// React Fragments
/* 
- Os React fragments são interessantes para quando precisamos ter mais
de um elemento pai em um componente;
- Criamos uma tag vazia: <>...</>;
- E ela serve como elemento pai, não alterando a estrutura do HTML
como uma div, por exemplo.
*/

// Children prop
/* 
- Children prop é um recurso utilizado para quando um
componente precisa ter JSX dentro dele;
- Porém este JSX vem do componente pai;
- Então o componente age como um container abraçando
estes elmentos;
- E children é considerada uma prop do componente.
*/

// Funções em props
/* 
- As funções podem ser passadas para as props normalmente;
- Basta criar a função no componente pai e enviar
como prop para o componente;
- No componente filho ela pode ser ativada por um evento, por exemplo.
*/

// Elevação de state
/* 
- Elevação de state ou State lift é quando um valor é elevado do componente
filho para o componente pai;
- Geralmente temos um componente que usa state e outro que o altera;
- Então precisamos passar a alteração para o componente pai, e este passa
para o componente que usa o state.
*/

function App() {
  // props - pode ser como variavel
  // const name = "Rafael";
  // props - pode ser como hook
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <h2>Fundamentos React</h2>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Images />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring props */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando componente */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="Teste" />
      {/* children */}
      <Container myValue = "testing">
      <p>E este é o conteúdo</p>
      </Container>
      <Container myValue = "testing2">
      <p>Testando container</p>
      </Container>
      {/* executar função como props */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
