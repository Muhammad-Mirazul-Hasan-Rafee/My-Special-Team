import React, { useEffect, useState } from 'react';

const Players = () => {
    const [players , setPlayers] = useState([]);

    // load the data
    useEffect(() =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Players;