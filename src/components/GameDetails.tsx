import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import GameForm from "./GameForm";

export default function GameDetails(){
const { id } = useParams();
const navigate = useNavigate()
const [game, setGame] = useState<Game | null>(null)

useEffect(() => {
    fetch(`http://localhost:3000/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
  }, [id])

  const handleUpdate = async (updatedGame: Game) => {
    await fetch(`http://localhost:3000/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGame)
    })
    navigate("/games")
}

 if (!game) return <p>Loading...</p>

return (
    <>
        <div>
            <h2>Modifier le jeu</h2>

            <GameForm
                initialGame={game}
                onGameAdded={handleUpdate}
            />
        </div>
    </>
)
}