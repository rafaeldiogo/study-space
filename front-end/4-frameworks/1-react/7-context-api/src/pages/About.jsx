/* import { useContext } from "react";
import { CounterContext } from "../context/CounterContext"; */
import { ChangeCounter } from "../components/ChangeCounter";

// 4 - refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

export const About = () => {
  /*  const { counter } = useContext(CounterContext); */

  // 4 - refatorando context com hook
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do context */}
      <ChangeCounter />
    </div>
  );
};
