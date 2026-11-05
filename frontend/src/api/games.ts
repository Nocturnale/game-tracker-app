import type { CreateGame, Game, GameFiltering } from '@game-tracker-app/shared';

const API_URL = import.meta.env.VITE_API_URL;

export async function getGames(
  filters?:GameFiltering
): Promise<Game[]> {

  const params = new URLSearchParams();

  if(filters?.title?.trim()) {
    params.set('title', filters.title.trim());
  }

  if(filters?.status){
    params.set('status', filters.status)
  }

  if(filters?.platformId) {
    params.set('platformId', filters.platformId)
  }

  const queryString = params.toString();
  
  const response = await fetch(
    queryString ? `${API_URL}/games?${queryString}` : `${API_URL}/games`
  );

  if (!response.ok) {
    throw new Error('Impossible de récupérer les jeux');
  }

  return response.json();
}

export async function getGameById(id: string): Promise<Game>{
  const response = await fetch(
    `${API_URL}/games/${id}`,
  );

  if(!response.ok){
    throw new Error('Erreur lors de la récupération du jeu');
  }

  return response.json();
}

export async function createGame(data: CreateGame): Promise<Game>{
  const response = await fetch(`${API_URL}/games`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok){
    throw new Error('Impossible de créer le jeu')
  }

  return response.json();
}