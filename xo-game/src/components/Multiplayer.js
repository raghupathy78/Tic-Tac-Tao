import React, { useState } from 'react';
import Board from './Board';
import { resetGame, checkWinner } from '../utils/gameLogic';

const Multiplayer = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleSquareClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        }
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div className="multiplayer-game">
            <h1>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}</h1>
            <Board squares={board} onSquareClick={handleSquareClick} />
            <button onClick={handleReset}>Reset Game</button>
        </div>
    );
};

export default Multiplayer;