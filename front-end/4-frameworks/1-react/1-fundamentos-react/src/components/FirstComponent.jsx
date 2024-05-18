// components
import MyComponent from "./MyComponent";

// arquivo de estilo

const FirstComponent = () => {
  // essa função faz isso
  /* Múltiplas linhas */

    return (
    // Elemento Pai (nesse caso uma div) necessário 
    <div>
      <h1>Meu Primeiro Componente</h1>
      {/* class no JSX é className */}
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
};
export default FirstComponent;
