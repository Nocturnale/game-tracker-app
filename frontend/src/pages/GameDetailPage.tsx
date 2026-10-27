import { useParams } from "react-router";
import { useGame } from "../hooks/useGame";

export default function GameDetailPage(){
    const { id } = useParams();
    
    if(!id){
        return <p>Identifiant du jeu manquant</p>
    }

    const { data: game, isPending, isError } = useGame(id)

    if(isPending){
        return <p>Chargement du jeu</p>
    }

    if (isError || !game) {
        return <p>Impossible de récupérer ce jeu.</p>;
    }

    return (
        <main className="mx-auto bg-[#ffd54f] rounded-sm max-w-xl p-6 m-4">
            <h1 className="text-2xl font-bold">{game.title}</h1>
            <p>Plateforme : {game.platform.name}</p>
            <p>Statut : {game.status}</p>
            {game.status === 'À faire' ? (
                <>
                    <p>Heures estimées : {game.estimatedHours}</p>
                    <p>Priorité : {game.priority}</p>
                </>
                
            ) : (
                <>
                    <p>Heures jouées : {game.playedHours}</p>
                    <p>Note : {game.rating}</p>
                </>
                
            )}
            
            
            <div className="mt-4 flex justify-center">
                <button className="bg-transparent hover:bg-[#6b5cb1] text-[#6b5cb1] font-semibold hover:text-white py-2 px-4 border-2 border-[#6b5cb1] hover:border-transparent rounded">
                    Modifier</button>

            </div>
        </main>
    )
}