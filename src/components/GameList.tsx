import GameItem from "./GameItem";
import type {Game} from "../type";

interface Props {
  readonly games: Game[];
}

export default function GameList({games}:Props){


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