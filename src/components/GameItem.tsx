import type { Game } from "../type";

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
       </>
    )
}