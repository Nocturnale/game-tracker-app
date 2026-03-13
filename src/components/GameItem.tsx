import { Link } from "react-router-dom";
import { type Game } from "../types/Game";
import { DEVICE_LABELS } from "../constants/devices";

type GameProps = {
  readonly game:Game;
};

export default function GameItem({game}:GameProps){
    return(
        <>
            <h2>{game.title}</h2>
            <p>Nombres d'heures jouées : {game.playedHours}</p>
            <p>Statut : {game.status}</p>
            <p>Priorité : {game.priority}</p>
            <p>Plateforme: {DEVICE_LABELS[game.device]}</p>
            
            <Link to={`/details/${game.id}`}>
                <button>Modifier</button>
            </Link>
       </>
    )
}