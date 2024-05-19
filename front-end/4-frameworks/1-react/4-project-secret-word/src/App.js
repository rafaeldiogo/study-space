// components
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import StartScreen from "./components/StartScreen";

// data (dados)
import { wordsList } from "./data/words";

// hooks
import { useCallback, useEffect, useState } from "react";

// style/css
import "./App.css";

// estágios do jogo:
// start - página inicial;
// game - página do jogo;
// end - página do game over.
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  // criando o estado (state) do jogo e definindo como default a pagina inicial
  const [gameStage, setGameStage] = useState(stages[0].name);
  // criando o estado words para receber o data (dados)
  const [words] = useState(wordsList);
  // criando o estado para pegar as palavras do data (dados)
  const [pickedWord, setPickedWord] = useState("");
  // criando estado para selecao de categoria do jogo
  const [pickedCategory, setPickedCategory] = useState("");
  // criando o estado das letras e colocando um array vazio como default
  const [letters, setLetters] = useState([]);
  // criando estado de letras adivinhadas
  const [guessedLetters, setGuessedLetters] = useState([]);
  // criando estado das letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);
  // criando estado das tentativas para acertar as letras e colocando 3 tentaivas como default
  const [guesses, setGuesses] = useState(guessesQty);
  // crindo estado da potuação
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // pegando as chaves do objeto words - wordList do data (dados)
    const categories = Object.keys(words);
    // retornado a categoria de forma aleatória
    // como Math.random() retorna um float, é preciso usar Math.floor para arredondar para baixo
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // pegando uma palavra aleatória dentro da categoria aleatoria encontrada dentre as que estão no data (dados)
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // alterando o estagio do jogo para game (iniciando o jogo)
  // alterando de start para game
  const StartGame = useCallback(() => {
    // resetar estados
    clearLetterStates();
    // pegando palavra e categoria
    const { word, category } = pickWordAndCategory();
    // Criando um array de letras da palavra aleatoria
    let wordLetters = word.split("");
    // transformando todas as letras em minúsculas
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // alterando todos os estados
    setPickedWord(word);
    setLetters(wordLetters);
    setPickedCategory(category);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // processar a letra no input que vai mudar o estagio do jogo para game over
  const VerifyLetter = (letter) => {
    // normalizando as letras para ficarem minúscula
    const normalizedLetter = letter.toLowerCase();

    // verificando se a letra ja foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // setar a letra acertada ou remover a tentativa
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  // reseta os campos de quantidade de tentativas e letras utilizadas
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // monitorando o estado guesses para quando errar todas as tentativas
  // mudar o estado do jogo para end (game over)
  // verifica se as tentativas acabaram
  useEffect(() => {
    if (guesses <= 0) {
      // resetar estados para reiniciar o jogo
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // verifica a condição de vitória do jogo
  useEffect(() => {
    // retorna um array de letras únicas (sem letras repetidas)
    // o objeto Set so deixa itens únicos no array
    const uniqueLetters = [...new Set(letters)];

    // condição da vitória
    if (guessedLetters.length === uniqueLetters.length && uniqueLetters.length !== 0) {
      // adicionando pontuação (score)
      setScore((actualScore) => (actualScore += 100));

      // reiniciar jogo com nova palavra
      StartGame();
    }

  }, [guessedLetters, letters, StartGame]);

  // reiniciar o jogo
  const RetryGame = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {/* renderização condicional */}
      {/* passando startGame como props para receber a função StartGame que mudará o estágio do jogo */}
      {gameStage === "start" && <StartScreen startGame={StartGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={VerifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retryGame={RetryGame} score={score} />}
    </div>
  );
}

export default App;
