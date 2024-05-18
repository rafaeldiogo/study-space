const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  const renderSomenthing = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        {/* Boa prática */}
        <button onClick={handleMyEvent}>Clique aqui!</button>
        <button onClick={() => console.log("clicou!")}>
          Clique aqui também!
        </button>
        {/* Fazer assim é uma má prática */}
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir =)");
            }
          }}
        >
          Clica aqui, por favor
        </button>
      </div>
      {renderSomenthing(true)}
      {renderSomenthing(false)}
    </div>
  );
};
export default Events;
