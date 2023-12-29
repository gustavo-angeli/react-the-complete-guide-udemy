import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS} from "./winning-combinations"

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol];
      }
  }

  return winner
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player
  }
  return gameBoard
}

function App() {
  const [players , setPlayersName] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns)

  const winner = deriveWinner(gameBoard, players)
  let draw = gameTurns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, columnIndex) {
    // setActivePlayer((prevPlayer) => prevPlayer === "X" ? "O" : "X")
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
    
      const updatedTurns = [
        { square: {row: rowIndex, column: columnIndex}, player: currentPlayer },
        ...prevTurns,
      ]
      return updatedTurns
    })
  }

  function handleRestart() {
    setGameTurns([])
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayersName(prevPlayers => {
      return {...prevPlayers, [symbol]: newName}
    })
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" onChangeName={handlePlayerNameChange} isActive={activePlayer == "X" ? true : false}/>
          <Player name={PLAYERS.O} symbol="O" onChangeName={handlePlayerNameChange} isActive={activePlayer == "O" ? true : false}/>
        </ol>
        {(winner || draw) && <GameOver winner={winner} onSelect={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </menu>
  )
}

export default App
