import type { Game } from "../type.ts"

const API_URL = "http://localhost:3001/games"

export async function getGames(): Promise<Game[]>{
    const response = await fetch(API_URL)

    if(!response.ok){
        throw new Error("Erreur lors du chargement")
    }

    return response.json();
}