// style/css
import "./App.css";

// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// 1 - configuração react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// O que é React Router?
/* 
- React Router é um dos pacotes mais utilizados para criar uma estrutura
de rotas em aplicações de React;
- Ou seja, permite que nossas SPAs tenham múltiplas páginas;
- Precisamos instalar no nosso projeto;
- A configuração e utilização é simples;
- Também temos outras funções como: Redirect, Nested Routes,
Not Found Routes e outros.
*/

// Configurando o React Router
/* 
- Para configurar o React Router vamos ter que importar três elementos
de react-router-dom;
- BrowserRouter: Define onde a área do nosso app que vai trocar as
páginas;
- Routes: Define as rotas;
- Route: Um elemento deste para cada rota, configurar com path e
componente da rota.
*/

// Adicionando links
/* 
- Para criar links para as páginas vamos precisar utilizar o Link
do React Router;
- No Link configuramos o parâmetro to, que recebe a URL/path que 
será redirecionado quem clicar no link;
- Se um componente tiver usando algo do react-router-dom ele
precisa estar dentro do BrowserRouter pois se não vai quebrar.
*/

// Carregando dados
/* 
- Vamos exercitar novamente o carregamento de dados com o nosso
hook useFetch;
- Depois poderemos utilizá-los para o carregamento de dados individuais;
- Utilizaremos o hook igual ao da última seção e vamos imprimir os
produtos na Home da mesma forma.
*/

// Rota Dinâmica
/* 
- Para criar uma rota dinâmica vamos precisar definir uma nova Route
em App.js;
- Que deve ter o padrão de: /products/:id;
- Onde :id é o dado dinâmico, ou seja, podemos ter qualquer valor;
- Na página podemos utilizar o hook useParams para resgatar esta
informação.
*/

// Carregamento dado individual (carregamento de dado dinâmico)
/* 
- Graças ao passo dado na aula passada, o carregamento individual de
um produto será fácil;
- Vamos utilizar o id recebido para forma a nova URL;
- Podemos utilizar o hook useFetch para trazer o item;
- Por fim, faremos a validação e impressão do mesmo no JSX.
*/

// Nested route
/* 
- As nested routes indicam URLs mais complexas, como:
/products/:id/somenthing;
- Neste caso vamos precisar criar um componente que corresponda com
o padrão indicado e também a URL em App.js;
- Na nested route teremos o acesso ao parâmetro da URL também.
*/

// No match route (404)
/* 
- Podemos criar uma página 404 facilmente com o React Router;
- Basta criarmos o componente da página;
- E no arquivo App.js definir um path como *;
- Desta maneira, qualquer rota que não exista cairá neste componente.
*/

// Link ativo
/* 
- Para ter fácil acesso a uma modificação para os links ativos 
vamos trocar o Link pelo NavLink;
- Neste elemento temos acesso a um valor chamado isActive;
- Ou seja, podemos ativar uma classe se a rota atual for a que
está no atributo to.
*/

// Search Params (busca de dados)
/* 
- Search Params é um recurso que permite obter o que vem na URL em forma
de parâmetro, ex: produtos?q=camisa;
- Utilizamos o hook useSearchParams para obtê-los;
- Com este recurso fica simples fazer uma funcionalidade de busca no sistema.
*/

// Redirect
/* 
- Podemos precisar de um redirecimento de páginas eventualmente;
- Exemplo: uma página antiga do sistema responde agora a uma nova URL;
- Para isso vamos criar rota co Route normalmente;
- Mas em element vamos utilizar o componente Navigate com um to que
vai para a rota correta.
*/

function App() {
  return (
    <div className="App">
      {/* Elemento fora do BrowserRouter será repetido em todas as páginas. 
      Geralmente o header e o footer ficam fora para serem exibidos em todas as telas*/}
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
