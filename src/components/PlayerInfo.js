import React from 'react';

const PlayerInfo = ({getPlayer}) => {
    return (
        <div>
            <div className="card">
                <img src={getPlayer.image} alt=""/>
                <p>Race: {getPlayer.race}</p>
                <p>Damage: {getPlayer.damage}</p>
                <p>Health: {getPlayer.health}</p>
                <p>Energy: {getPlayer.energy}</p>
                <p>Stamina: {getPlayer.stamina}</p>
                <p>Strength: {getPlayer.strength}</p>
                <p>InventorySlots: {getPlayer.inventorySlots}</p>
                <p>Gold: {getPlayer.gold}</p>
            </div>
        </div>
    );
};

export default PlayerInfo;