import GameItem from "./GameItem";
import games from "../data/games.json";

export default function GameList(){
    return(
        <div className="game-list">
            <GameItem />
            <GameItem />
        </div>
        
    )
        
}