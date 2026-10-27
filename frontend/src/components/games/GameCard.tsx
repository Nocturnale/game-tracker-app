import type { Game } from "@game-tracker-app/shared";
import { Link } from "react-router";

type GameProps = {
    readonly game: Game;
}
export default function GameCard({game}: GameProps){
    return(
        <Link to={`/games/${game.id}`}>
        <div className="w-full sm:w-72 p-4 bg-[#ffd54f] text-[#242424] rounded-sm transition-colors duration-200 hover:bg-[#FFDB73]">
            <h2 className="font-bold">{game.title}</h2>
            <p>Statut : {game.status}</p>
            <p>Plateforme : {game.platform.name}</p>
            {game.status === 'À faire' ? (
                <>
                <p>Heures estimées : {game.estimatedHours}</p>
                <p>Priorité : {game.priority}</p>
                </>
                
            ) : (
                <p>Heures jouées : {game.playedHours}</p>
            )}
            
        </div>
        </Link>
    )
}