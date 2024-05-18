import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/* condicional if */}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, não!</p>}
      {/* if/else ternário */}
      {name === "João" ? (
        <div>
          <p>Sim, é João.</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado.</p>
        </div>
      )}
      <button onClick={() => setName("Rafael")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
