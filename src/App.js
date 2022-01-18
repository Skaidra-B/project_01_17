import './App.css';
import {useState} from "react";
import StartGame from "./components/StartGame";
import PlayerInfo from "./components/PlayerInfo";
import PlayerInventory from "./components/PlayerInventory";
import Toolbar from "./components/Toolbar";
import Shop from "./components/Shop";

function App() {

    const [getView, setView] = useState("start")
    const [getPlayer, setPlayer] = useState(null)
    const [getInventory, setInventory] = useState([])


    function playerChosen(player) {
        setPlayer(player)
        setView("game")
    }

    function inventoryChosen(obj) {
        setInventory([...getInventory, obj])
        console.log(obj)
    }

    return (
        <div className="App ">

            {getView === "start" && <StartGame choosePlayer={playerChosen}/>}

            {getView !== "start" && <Toolbar setView={setView}/>}

            {getView === "game" &&
                <div className="d-flex">
                    {getPlayer && <PlayerInfo getPlayer={getPlayer}/>}
                    <PlayerInventory getInventory={getInventory}/>
                </div>
            }

            {getView === "shop" &&
                <div className="d-flex">
                    <Shop inventoryChosen={inventoryChosen}/>
                    <PlayerInventory getInventory={getInventory}/>
                </div>
            }

            {getView === "arena" && <h1>arena</h1>}

        </div>
    );
}

export default App;
