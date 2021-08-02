import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState (emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState();

  const handleCellClick = (index) => {
    if (winner) {
      console.log("GAME OVER");
      return null;
    }

    if (board[index] !== "") {
      console.log("Posição ocupada");
      return null;
    }
    
    
    
    setBoard(
      board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item)
      );
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  const checkWinner = () => {
    const possibleWaysToWin = [
      // horizontais
      [board[0], board[1], board[2]], 
      [board[3], board[4], board[5]], 
      [board[6], board[7], board[8]],
      // verticais 
      [board[0], board[3], board[6]], 
      [board[1], board[4], board[7]], 
      [board[2], board[5], board[8]], 
      // diagonais
      [board[0], board[4], board[8]], 
      [board[2], board[4], board[6]], 
    ];

    possibleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === "O")) setWinner("O");
      if (cells.every(cell => cell === "X")) setWinner("X");
    });

    checkDraw();

  }

  const checkDraw = () => {
    if (board.every(item => item !== "")) {
      setWinner("D");
    }
  }


  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>
      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div 
          key={index}
          className={`cell ${item}`}
          onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>

      {winner &&
        <footer>
          { winner === "D" ?
          <h2 className="winner-message">
          <span className={winner}>Empatou!</span>
          </h2>
          :
          <h2 className="winner-message">
          <span className={winner}>{winner} venceu!</span>
          </h2>
          }
          <button onClick={resetGame} className="btn">Recomeçar Jogo!</button>
        </footer>
      }
    </main>
  );
}

export default TicTacToe;
