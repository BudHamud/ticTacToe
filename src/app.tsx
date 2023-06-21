import "./app.css";
import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import Modal from "./components/modal";

const App: FunctionalComponent<{}> = () => {
  const [turn, setTurn] = useState("X");
  const [gameEnd, setGameEnd] = useState("");
  const [options, setOptions] = useState(["", "", "", "", "", "", "", "", ""]);

  const changeValue = (i: number) => {
    const value = turn === "X" ? "X" : "O";
    let arr = options;
    arr[i] = value;
    setOptions(arr);
    setTurn(value === "X" ? "O" : "X");
    checkWinner(arr);
  };

  const checkWinner = (arr: Array<string>) => {
    const winCondition: Array<number[]> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 6],
    ];
    winCondition.map((e) => {
      if (arr[e[0]] === "X" && arr[e[1]] === "X" && arr[e[2]] === "X")
        setGameEnd("X");
      else if (arr[e[0]] === "O" && arr[e[1]] === "O" && arr[e[2]] === "O")
        setGameEnd("O");
    });
  };

  const closeModal = () => {
    setGameEnd("");
    setOptions(["", "", "", "", "", "", "", "", ""])
  };

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {options.map((e, i) => (
          <button key={i} onClick={() => changeValue(i)}>
            {e}
          </button>
        ))}
      </section>
      {gameEnd ? <Modal onClose={closeModal} value={gameEnd} /> : null}
    </main>
  );
};

export default App;