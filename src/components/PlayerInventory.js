import React from 'react';



const PlayerInventory = ({getInventory}) => {
    return (
        <div className="d-flex inventory grow1">

            {getInventory.map((x, i) =>
                <div className="item">
                    <img src={x.image} alt=""/>

                </div>)}
        </div>
    );
};

export default PlayerInventory;