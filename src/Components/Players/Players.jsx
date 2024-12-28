import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';

const Players = ({selectUpdate , creditUpdate , select , credit}) => {
    const [players , setPlayers] = useState([]);
    useEffect(() =>{
        fetch('players.json')
        .then(res => res.json())
        .then((data) => setPlayers(data.map((player) => ({...player , clicked:false}))));
    }, []);

    const manageClick = (playerId) =>{

        if(select < 11){

            setPlayers((prevPlayers) => 
                prevPlayers.map((player) => player.playerId === playerId && !player.clicked ? {...player , clicked: true} : player)
            
            );
            selectUpdate();
            creditUpdate();
        }
        else{
            alert('You can only select 11 players');
        }

    };



    return (
        
        <div className='grid grid-cols-3 '>
            {
                
                players.map(player => <Player
                    manageClick={manageClick}
                    credit={credit}
                    key={player.playerId} 
                     player={player}>
                     </Player>)
            }
        </div>
    );
};

Players.propTypes = {
    
};

export default Players;