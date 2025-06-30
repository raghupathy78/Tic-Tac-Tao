import React from 'react';
import Square from './Square';
import { useGame } from '../utils/gameLogic';
import './Board.css';

const Board = () => {
    const { board, handleSquareClick, winner } = useGame();

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="board-row">
                    {row.map((square, colIndex) => (
                        <Square
                            key={colIndex}
                            value={square}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
            {winner && <div className="winner-message">{winner} wins!</div>}
        </div>
    );
};

export default Board;