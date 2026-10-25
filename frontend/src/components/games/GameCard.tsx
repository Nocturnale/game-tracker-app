import type { Game } from "@game-tracker-app/shared";

type GameProps = {
    readonly game: Game;
}
export default function GameCard({game}: GameProps){
    return(
        <div className="w-full sm:w-72 p-4 bg-[#ffd54f] text-[#242424] rounded-sm transition-colors duration-200 hover:bg-[#FFDB73]">
            <h2 className="font-bold">{game.title}</h2>
            <p>Nombres d'heures jouées : {game.playedHours}</p>
            <p>Statut : {game.status}</p>
            <p>Priorité : {game.priority}</p>
            <p>Plateforme : {game.platform.name}</p>
            <div className="mt-4 flex justify-center">
                <button className="bg-transparent hover:bg-[#6b5cb1] text-[#6b5cb1] font-semibold hover:text-white py-2 px-4 border-2 border-[#6b5cb1] hover:border-transparent rounded">
                    Modifier</button>
            </div>
        </div>
    )
}