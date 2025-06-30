import React, { useState } from 'react';
import Board from './components/Board';
import Multiplayer from './components/Multiplayer';
import { checkWinner, resetGame } from './utils/gameLogic';
import './styles/theme';

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [gameStatus, setGameStatus] = useState('Next player: X');
    const [isMultiplayer, setIsMultiplayer] = useState(false);

    const handleSquareClick = (index) => {
        if (board[index] || checkWinner(board)) {
            return;
        }
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        const winner = checkWinner(newBoard);
        if (winner) {
            setGameStatus(`Winner: ${winner}`);
        } else {
            setGameStatus(`Next player: ${isXNext ? 'O' : 'X'}`);
        }
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setGameStatus('Next player: X');
    };

    return (
        <div className="app">
            <h1 className="game-title">X O Game</h1>
            <Multiplayer setIsMultiplayer={setIsMultiplayer} />
            <Board squares={board} onSquareClick={handleSquareClick} />
            <div className="status">{gameStatus}</div>
            <button className="reset-button" onClick={handleReset}>Reset Game</button>
        </div>
    );
};

export default App;