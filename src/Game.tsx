import React, { useState } from 'react';

const Game = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
    });

    const handleClick = () => {
        
        setGame(prevGame => ({
            ...prevGame,
            player: {
                ...prevGame.player,
                name: "New Name" 
            }
        }));
    };

    return (
        <div>
            <p>Player Name: {game.player.name}</p>
            <button onClick={handleClick}>Change Name</button>
        </div>
    );
};

export default Game;
