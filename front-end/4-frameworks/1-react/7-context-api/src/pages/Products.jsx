import React, { useContext } from "react";
import { ChangeCounter } from "../components/ChangeCounter";
import { CounterContext } from "../context/CounterContext";

export const Products = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do context */}
      <ChangeCounter />
    </div>
  );
};
