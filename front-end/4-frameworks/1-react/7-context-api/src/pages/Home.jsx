/* import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
 */
import { ChangeCounter } from "../components/ChangeCounter";

// 4 - refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

export const Home = () => {
  /*   const { counter } = useContext(CounterContext); */

  // 4 - refatorando context com hook
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do context */}
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>
          Alterar para Vermelho
        </button>
        <button onClick={() => setTitleColor("BLUE")}>Alterar para Azul</button>
      </div>
    </div>
  );
};
