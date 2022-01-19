import React from 'react';
import {useState} from "react";

const monsters = [
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
        name: "Basilisk",
        maxDamage: 5,
        health: 100
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
        name: "Bat",
        maxDamage: 8,
        health: 80
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
        name: "Bear",
        maxDamage: 20,
        health: 150
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
        name: "Beetle",
        maxDamage: 3,
        health: 300
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
        name: "Boar",
        maxDamage: 7,
        health: 85
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
        name: "Carrion bird",
        maxDamage: 6,
        health: 170
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
        name: "Chimaera",
        maxDamage: 12,
        health: 190
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
        name: "Clefthoof",
        maxDamage: 50,
        health: 500
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
        name: "Crab",
        maxDamage: 8,
        health: 120
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
        name: "Crocolisk",
        maxDamage: 38,
        health: 420
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
        name: "Devilsaur",
        maxDamage: 25,
        health: 250
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
        name: "Diemetradon",
        maxDamage: 12,
        health: 90
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
        name: "Dragonhawk",
        maxDamage: 120,
        health: 20
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
        name: "Elekk",
        maxDamage: 34,
        health: 160
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
        name: "Fox",
        maxDamage: 5,
        health: 50
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
        name: "Gryphon",
        maxDamage: 18,
        health: 350
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
        name: "Gorilla",
        maxDamage: 30,
        health: 240
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
        name: "Horse",
        maxDamage: 3,
        health: 150
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
        name: "Hydra",
        maxDamage: 40,
        health: 500
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
        name: "Hyena",
        maxDamage: 9,
        health: 120
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
        name: "Lion",
        maxDamage: 13,
        health: 200
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
        name: "Lynx",
        maxDamage: 12,
        health: 150
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
        name: "Mastiff",
        maxDamage: 7,
        health: 80
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
        name: "Monkey",
        maxDamage: 4,
        health: 300
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
        name: "Nether ray",
        maxDamage: 6,
        health: 120
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
        name: "Owl",
        maxDamage: 7,
        health: 70
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
        name: "Panther",
        maxDamage: 19,
        health: 40
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
        name: "Parrot",
        maxDamage: 2,
        health: 30
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
        name: "Raven",
        maxDamage: 8,
        health: 150
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
        name: "Rhinoceros",
        maxDamage: 120,
        health: 1500
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
        name: "Scorpid",
        maxDamage: 25,
        health: 300
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
        name: "Sea snake",
        maxDamage: 5,
        health: 50
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
        name: "Serpent",
        maxDamage: 12,
        health: 80
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
        name: "Shark",
        maxDamage: 15,
        health: 210
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
        name: "Spore bat",
        maxDamage: 9,
        health: 150
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
        name: "Stag",
        maxDamage: 4,
        health: 200
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
        name: "Tallstrider",
        maxDamage: 20,
        health: 80
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
        name: "Threshadon",
        maxDamage: 70,
        health: 800
    },
    {
        image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
        name: "Turtle",
        maxDamage: 3,
        health: 5000
    }
]


const Arena = ({player, weapon, setView, setMoney, money}) => {

    const random = (num) => Math.round(Math.random() * num)

    const [getMonster, setMonster] = useState(random(monsters.length-1))
    const [getPlayerHealth, setPlayerHealth] = useState(100)
    const [getMonsterHealth, setMonsterHealth] = useState(100)

    function getPercent(maxHealth, currentDamage) {
        const onePercent = maxHealth / 100
        return currentDamage / onePercent
    }



    function hit() {

        const playerDamage = random(weapon.maxDamage) + player.damage
        const enemyDamage = random(monsters[getMonster].maxDamage)

        const damageMadeToMonsterInPercent = getPercent(monsters[getMonster].health, playerDamage)
        const damageMadeToPlayerInPercent = getPercent(player.health, enemyDamage)

        setPlayerHealth(getPlayerHealth - damageMadeToPlayerInPercent)
        setMonsterHealth(getMonsterHealth - damageMadeToMonsterInPercent)

    }

    if(getPlayerHealth <= 0) {
        setView("over")
    }
    if(getMonsterHealth <= 0) {
        setMonster(random(monsters.length - 1))
        setMonsterHealth(100)
        setMoney(money + random(1000))
    }

    return (
        <div className="d-flex space-e a-center arena">
            <div className="arenaCard a-center">
                <img src={player.image} alt=""/>
                <div className="progressWrapper">
                    <div className="progress" style={{width: getPlayerHealth + "%"}}/>
                </div>
            </div>

            <button onClick={hit}>Attack</button>

            <div className="arenaCard a-center">
                <img src={monsters[getMonster].image} alt=""/>
                <div className="progressWrapper">
                    <div className="progress" style={{width: getMonsterHealth + "%"}}/>
                </div>
            </div>
        </div>
    );
};

export default Arena;