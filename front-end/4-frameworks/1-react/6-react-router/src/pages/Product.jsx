import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 - rota dinâmica
  // useParams - traz um objeto com todos os parametros da url
  // foi chamado de id mas pode ser qualquer nome, contanto que
  // seja o mesmo nome presente no path onde foi chamado
  const { id } = useParams();

  // 5 - carregamento dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do Produto {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          {/* 6 - nested route */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
