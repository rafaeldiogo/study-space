import { useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando itens do DB...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};
