import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Players = () => {
    const [players , setPlayers] = useState([]);
    useEffect(() =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);
    return (
        <div>
            
        </div>
    );
};

Players.propTypes = {
    
};

export default Players;