//hooks
import { useState, useEffect } from "react";

// style/css
import "./App.css";

// 4 - custom hooks
import { useFetch } from "./hooks/useFetch";

// simulando a API com json-server
const url = "http://localhost:3001/products";

// JSON server
/* 
- O JSON server é um pacote npm;
- Ele simula uma API e isso nos possibilita fazer requisições HTTP;
- Vamos aprender a integrar este recurso com o React;
- Podemos entender isso como uma etapa de preparação para APIs reais;
- Ou seja, atingir o mesmo resultado mas semprecisar de uma estrutura no back-end;
- Adicionando o script "server": "json-server -watch /src/data/db.json" no package.json;
- Depois utilizando a linha de comando "npm run server" no terminal;
- Será criado um endpoint na porta http://localhost:3000/products. Onde products é o array de objetos
que está no arquivo db.json
*/

// A importância do useEffect
/* 
- O useEffect faz com que determinada ação seja executada apenas uma vez;
- Isso é interessante pois o componente estão sempre se re-renderizando então ter
ações únicas às vezes;
- O useEffect ainda possui um array de dependências que deve conter os dados que
ativem a execução da função de forma automática;
- O useEffect estará presente sempre (ou na grande maioria da vezes) nas requisições
assíncronas.
*/

// Resgatando dados com React
/* 
- Para trazer os dados vamos ter que utilizar vários recursos;
- Primeiramente ater um local para salvá-los (useState);
- Renderizar a chamada a API apenas uma vez (useEffect);
- Um meio de fazer a requisição assíncrona (Fetch API);
- Ao dar console.log em products, percebe que é renderizado duas vezes
porém não é um bug. É uma condição causada pelo StrictMode
da versão 18 do React. Dessa forma fará que perceba bugs
no código de forma mais clara;
- Essa duplicação só é vista no ambiente de desenvolvimento. 
*/

// Adicionando dados
/* 
- Para adicionar um item vamos precisar resgatar os dados do form com o
useState;
- Reunir eles em uma função após o submit e enviar um request de POST
para a nossa API;
- O processo é bem parecido com o de resgate de dados, mas agora estamos
enviando dados.
*/

// Carregamento dinâmico de dados
/* 
- Nesse formato, ao adicionar um dado ele vai ser exibido automaticamente
na tela sem precisar dar reload na página;
- Se a requisição foi feita com sucesso, podemos adicionar o item a lista
após o request;
- Isso torna nossa aplicação mais performática;
- Utilizaremos o set do useState para isso.
*/

// Custom hook para fetch
/* 
- É normal dividir funções que podem ser reaproveitadas em hooks;
- Esta técnica é chama de custom hook e vamos criar um para o resgate de dados;
- Os hooks geralmente ficam na pasta hooks;
- Devemos utilizar o padrão useName;
- Basicamente criamos uma função e exportamos ela.
*/

// Refatorando o POST
/* 
- Podemos utilizar o mesmo hook para incluir uma etapa de POST;
- Vamos criar um novo useEffect que mapeia uma outra mudança de estado;
- Após ela ocorrer executamos a adição de produto;
- Obs: nem sempre reutilizar um hook é a melhor estratégia.
*/

// Estado de loading
/* 
- Quando fizermos requisições para APIs é normal que haja um intervalo de
loading entre a requisição e o recebimento da resposta;
- Podemos fazer isso no nosso hook também;
- Identificar quando começa e termina este estado.
*/

// Estado de loading no POST
/* 
- Podemos bloquear ações indevidas em outras requests também, como no POST;
- Uma ação interessante é remover a ação de adicionar outro item
enquanto o request ainda não finalizou.
*/

// Tratando erros
/* 
- Podemos tratar os erros das requisições por meio de um try catch;
- Além de pegar os dados do erro, também podemos alterar um state para
imprimir um elemento se algo der errado;
- Desta maneira conseguimos prever vários cenários (dados resgatados, 
  carregamento e erro).
*/

function App() {
  // criando o estado dos produtos para recebê-los e definindo como default um arrau vazio
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // iniciando o estado dos dados que sé preciso para enviar
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  /*   useEffect(() => {
    async function fetchData() {
      // resposta do fetch
      const res = await fetch(url);
      // transformando a resposta em json
      const data = await res.json();

      // atualizando o products com o data
      setProducts(data);
    }
    fetchData();
  }, []); */

  // 2 - adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    // montando o objeto que vai ser enviado
    const product = {
      name,
      price,
    };

    /*    // fazendo requisicao do POST para enviar dados
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product), // transformando objeto em JSON
    });

    // 3 - carregamento dinâmico de dados
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]); */

    // 5 - refatorando POST
    httpConfig(product, "POST");

    // resetando dados
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {/* 8 - tratando erros */}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price}
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
