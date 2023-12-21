import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    let playerNameField = <span className="player-name">{playerName}</span>;

    function handleCick() {
        setIsEditing(editing => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    function handleNameInput(event) {
        setPlayerName(event.target.value);

    }

    if (isEditing) {
        playerNameField = <input type="text" value={playerName} onChange={handleNameInput} required />
    }
    
    return <>
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerNameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleCick}> {!isEditing ? "Edit" : "Save"}</button>
          </li>
    </>
}