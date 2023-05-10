import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import "./styles.css";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winMessage, setWinMessage] = useState(null);

  function checkScore() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");
      if (circleWins === true) {
        setWinMessage("Circle Wins");
      }
    });
    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins === true) {
        setWinMessage("Cross Wins");
      }
    });
    
  }

  useEffect(() => {
    checkScore();
  }, [cells]);
  const message = `Now it's ${go}'s turn`;
  return (
    <div className="App">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winMessage={winMessage}
          />
        ))}
      </div>

      <div className="showMessage">
        {(() => {
          if (winMessage) {
            return <h2 className="win">{winMessage}</h2>;
          } else {
            return <h3 className="goChange">{message}</h3>;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
