import type { Game } from "@game-tracker-app/shared";

type GameProps = {
    readonly game: Game;
}
export default function GameCard({game}: GameProps){
    return(
        <div className="p-4 bg-[#ffd54f] text-[#242424] rounded-sm">
            <h2>{game.title}</h2>
            <p>Nombres d'heures jouées : {game.playedHours}</p>
            <p>Statut : {game.status}</p>
            <p>Priorité : {game.priority}</p>
            
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Modifier</button>

        </div>
    )
}