import type { Game } from "../types/Game.ts"

const API_URL = "http://localhost:3000/games"

export async function getGames(): Promise<Game[]>{
    const response = await fetch(API_URL)

    if(!response.ok){
        throw new Error("Erreur lors du chargement")
    }

    return response.json();
}

export async function getGamebyId(id:number): Promise<Game>{
    const response = await fetch(API_URL + "/"+ id)

    if(!response.ok){
        throw new Error("Erreur lors du chargement")
    }

    return response.json();
}

export async function addGame(game: Omit<Game, "id">): Promise<Game>{
    const response = await fetch(API_URL, {
        method : "POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify(game)
    })

    if(!response.ok){
        throw new Error("Erreur lors de l'ajout du jeu")
    }

    return response.json();
}