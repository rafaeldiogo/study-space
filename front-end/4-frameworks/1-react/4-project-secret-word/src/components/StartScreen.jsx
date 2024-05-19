import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      {/* passando a props startGame no atributo onClick para inciar o jogo ao ser clicado */}
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
