import React from 'react';


const Toolbar = ({setView, money, weapon, potion}) => {
    return (
        <div className="toolbar d-flex s-around">
            <div>
                <button onClick={() => setView("game")}>Game</button>
                <button onClick={() => setView("shop")}>Shop</button>
                <button onClick={() => setView("arena")}>Arena</button>
            </div>

            <h2>GOLD: {money}</h2>
            <img src={weapon.image} alt=""/>
            <img src={potion.image} alt=""/>

        </div>



    );
};

export default Toolbar;