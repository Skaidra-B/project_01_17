import './App.css';
import {useState} from "react";
import StartGame from "./components/StartGame";
import PlayerInfo from "./components/PlayerInfo";
import PlayerInventory from "./components/PlayerInventory";
import Toolbar from "./components/Toolbar";
import Shop from "./components/Shop";
import Arena from "./components/Arena";

function App() {

    const [getView, setView] = useState("start")
    const [getPlayer, setPlayer] = useState(null)
    const [getInventory, setInventory] = useState([])
    const [getMoney, setMoney] = useState(0)
    const [getWeapon, setWeapon] = useState({
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_04.gif",
        maxDamage: 4,
        price: 50,
        energyPerHit: 20,
        effects: []
    })
    const [getPotion, setPotion] = useState(
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 10",
            effect: {
                health: 10
            },
            price: 200
        }
    )


    function playerChosen(player) {
        setMoney(player.gold)
        setPlayer(player)
        setView("game")

    }


    function buyItem(item) {
        if(getMoney >= item.price) {
            if(getPlayer.inventorySlots > getInventory.length) {
                setMoney(getMoney - item.price)
                setInventory([...getInventory, item])
            }
         }
    }

    return (
        <div className="App ">

            {getView === "start" && <StartGame choosePlayer={playerChosen}/>}

            {(getView !== "start" && getView !== "over") && <Toolbar potion={getPotion} weapon={getWeapon} setView={setView} money={getMoney}/>}

            {getView === "game" &&
                <div className="d-flex">
                    {getPlayer && <PlayerInfo getPlayer={getPlayer}/>}
                    <PlayerInventory equip={setWeapon} getInventory={getInventory} slots={getPlayer.inventorySlots}/>
                </div>
            }

            {getView === "shop" &&
                <div className="d-flex">
                    <Shop buyItem={buyItem}/>
                    <PlayerInventory equip={setWeapon} slots={getPlayer.inventorySlots} getInventory={getInventory}/>
                </div>
            }

            {getView === "arena" && <Arena money={getMoney} setMoney={setMoney} weapon={getWeapon} player={getPlayer} setView={setView}/>}

            {getView === "over" && <h1 className="over" >GAME IS OVER</h1>}

        </div>
    );
}

export default App;
