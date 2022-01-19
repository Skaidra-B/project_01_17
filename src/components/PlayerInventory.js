import React from 'react';



const PlayerInventory = ({getInventory, slots, equip}) => {
    return (
        <div className="d-flex column inventory grow1">
            <h3>Slots: {slots}</h3>
            <div className="d-flex wrap">
                {getInventory.map((x, i) =>
                    <div className="item" key={i} onClick={() => equip(x)}>
                        <img src={x.image} alt=""/>
                    </div>)}
            </div>




        </div>
    );
};

export default PlayerInventory;