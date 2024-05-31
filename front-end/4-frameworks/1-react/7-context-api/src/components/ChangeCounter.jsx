// 3 - alterando contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Adicionar valor ao contador
    </button>
  );
};
