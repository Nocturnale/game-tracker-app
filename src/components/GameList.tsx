import GameItem from "./GameItem";
import type {Game} from "../type";
import {getGames} from "../services/gameService";
import { useEffect, useState } from "react";



export default function GameList(){
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        getGames().then(setGames)
    }, [])

    return(
        <div className="game-list">
              {games.map((game:Game) =>(
                <div className="game-card" key={game.id}>
                <GameItem
                    game={game}
                />
                </div>
            ))}

        </div>
        
    )
        
}