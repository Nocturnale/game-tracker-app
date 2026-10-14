import type { Game } from '@game-tracker-app/shared';

const API_URL = import.meta.env.VITE_API_URL;

export async function getGames(): Promise<Game[]> {
  const response = await fetch(`${API_URL}/games`);

  if (!response.ok) {
    throw new Error('Impossible de récupérer les jeux');
  }

  return response.json();
}